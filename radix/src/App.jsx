// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HaberDetay from "./pages/HaberDetay";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/haber/:id" element={<HaberDetay />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
