import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const apiKey = import.meta.env.VITE_API_KEY;

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
