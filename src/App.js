import React from "react";
import Weather from "./Weather";

import "./App.css";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Weather App</h1>
        <Weather defaultCity="Gdansk" />
        <footer className="App-footer">
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/nataliia-boiko-ab48a9242/"
            target="_blank"
            rel="noopener noreferrer">
            Nataliia Boiko
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/NataliiaBoiko22/react-weather-app"
            target="_blank"
            rel="noopener noreferrer">
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://mellifluous-churros-4ed6d3.netlify.app/"
            target="_blank"
            rel="noopener noreferrer">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
