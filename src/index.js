import React from "react";
import "./index.css";
import App from "./App";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>

      <footer>
        This project was coded by
        <a href="https://github.com/gisbcode" target="_blank" rel="noopener">
          Giovanna Bellon
        </a>
        and is
        <a
          href="https://github.com/gisbcode/React-Weather-Forecast-Final-Project"
          target="_blank"
          rel="noopener"
        >
          on GitHub
        </a>
        and
        <a
          href="https://weatherforecastreactfinal.netlify.app/"
          target="_blank"
          rel="noopener"
        >
          Hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
