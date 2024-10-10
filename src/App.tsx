import React from "react";
import logo from "./logo.svg";
import "./App.css";
import config from "./config";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to {config.environment} environment</h1>
        {config.isDevelopment && (
          <div className="debug-info">
            <h2>Debug Information</h2>
            <pre>
              {JSON.stringify(
                {
                  apiUrl: config.apiUrl,
                  environment: config.environment,
                  features: config.features,
                },
                null,
                2
              )}
            </pre>
          </div>
        )}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
