import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const apiKey = import.meta.env.VITE_API_KEY;
console.log(apiKey); // You should see the API key logged in the browser's console

const root = createRoot(document.getElementById("app"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
