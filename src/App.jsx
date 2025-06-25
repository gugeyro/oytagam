import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#fff4e3]">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Добавьте другие маршруты здесь */}
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
