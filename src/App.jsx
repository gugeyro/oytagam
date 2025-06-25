// src/App.jsx
import React, { useEffect } from "react";
import Home from "./Home";
import "./App.css";

function App() {
  useEffect(() => {
    if (window?.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 to-orange-100">
      <Home />
    </div>
  );
}

export default App;
