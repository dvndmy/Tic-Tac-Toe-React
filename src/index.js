// Import necessary modules from React and ReactDOM
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Import the main styling for the application
import "./styles.css";

// Import the main component of the application
import App from "./App";

// Create a root using ReactDOM for rendering React components
const root = createRoot(document.getElementById("root"));

// Render the main component wrapped in StrictMode to catch potential issues
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
