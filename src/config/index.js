const config = {
  apiUrl: process.env.REACT_APP_API_URL,
  environment: process.env.REACT_APP_ENVIRONMENT,
  isProduction: process.env.REACT_APP_ENVIRONMENT === "production",
  isDevelopment: process.env.REACT_APP_ENVIRONMENT === "development",
  isStaging: process.env.REACT_APP_ENVIRONMENT === "staging",

  // Add more configuration options as needed
  features: {
    analytics: process.env.REACT_APP_ENVIRONMENT === "production",
    debugMode: process.env.REACT_APP_ENVIRONMENT === "development",
  },
};

export default config;
