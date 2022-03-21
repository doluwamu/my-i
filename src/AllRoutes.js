import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<LoginScreen />} />
        <Route path="/register" element={<SignUpScreen />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
