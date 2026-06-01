import React from "react";
import { createRoot } from "react-dom/client";

import "./material";

import "./styles/theme.css";
import "./styles/font.css";
import "./styles/App.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);