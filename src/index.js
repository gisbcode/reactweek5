import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <footer>
        This project was coded by
        <a href="https://github.com/gisbcode" target="_blank" rel="noreferrer">
          Giovanna Bellon
        </a>
        and is
        <a
          href="https://github.com/gisbcode/React-Weather-Forecast-Final-Project"
          target="_blank"
          rel="noreferrer"
        >
          on GitHub
        </a>
        and
        <a
          href="https://weatherforecastreactfinal.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
