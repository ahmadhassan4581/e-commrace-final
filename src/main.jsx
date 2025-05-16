import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { SuitProvider } from "./context/SuitContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SuitProvider>
      <App />
    </SuitProvider>
  </StrictMode>
);
