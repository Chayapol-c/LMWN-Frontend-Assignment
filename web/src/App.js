import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/trips" element={<Home />} />
        <Route path="*" element={<Navigate to="/trips" />} />
      </Routes>
    </>
  );
};

export default App;
