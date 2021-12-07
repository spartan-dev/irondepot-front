import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import PartTime from "./components/Pages/PartTime";
import FullTime from "./components/Pages/FullTime";
const Rutas = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="mexicopart_time" element={<PartTime />} />
    <Route path="mexicofull_time" element={<FullTime />} />
    <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
  </Routes>
);

export default Rutas;
