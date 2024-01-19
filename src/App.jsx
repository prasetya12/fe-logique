import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";

function App() {
  return (
    <>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
