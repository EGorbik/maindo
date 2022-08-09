import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./fonts/Gilroy/Gilroy-ExtraBold.otf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <HashRouter>
        <App />
    </HashRouter>
);