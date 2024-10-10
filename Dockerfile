# Build stage
FROM node:16-alpine as build

# Set working directory
WORKDIR /app

# Add deployment stage argument with default
ARG DEPLOYMENT_STAGE=development

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies including dev dependencies
RUN npm install --include=dev

# Copy all files
COPY . .

# Build app based on deployment stage
RUN npm run build:${DEPLOYMENT_STAGE}

# Serve stage
FROM nginx:alpine

# Copy built assets from build stage
COPY --from=build /app/build /usr/share/nginx/html

# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 8080
EXPOSE 8080

# Start Nginx and keep it running
CMD ["nginx", "-g", "daemon off;"]