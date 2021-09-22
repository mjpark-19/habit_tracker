import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import "@fortawesome/fontawesome-free/js/all.js";
import SimpleHabit from "./components/simpleHabit";

ReactDOM.render(
  <React.StrictMode>
    {/* strict mode (에러메세지 띄어주는)  */}
    {/* <App /> */}
    <SimpleHabit />
  </React.StrictMode>,
  document.getElementById("root")
);
