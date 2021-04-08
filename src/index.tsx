import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./Containers/App/App";
import "./assets/style/main.scss";

// function Welcome(props) {
//   return <h1>Привет, {props.name}</h1>;
// }

// const element = <Welcome name="Sara" />;


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
