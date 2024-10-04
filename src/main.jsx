import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App"; // Main layout or home page
import EventDetail from "./components/EventDetail";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<App />} />

        {/* Dynamic Route for Event Details */}
        <Route path="/event/:eventId" element={<EventDetail />} />
      </Routes>
    </Router>
  </StrictMode>
);
