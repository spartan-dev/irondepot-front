import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Layout from "./components/Layout/";
const Rutas = () => (
  <Layout>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  </Layout>
);

export default Rutas;
