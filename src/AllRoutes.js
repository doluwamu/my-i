import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import VerifyUserScreen from "./screens/VerifyUserScreen";
import Home from "./screens/Home";

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<LoginScreen />} />
        <Route path="/register" element={<SignUpScreen />} />
        <Route path="/verify" element={<VerifyUserScreen />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
