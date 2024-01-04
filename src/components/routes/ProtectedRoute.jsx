// ProtectedRoute.js
import React from "react";
import {  Navigate } from "react-router-dom";
import useAuthServices from "../../services/AuthService";

const ProtectedRoute = ({ children }) => {
  const { authenticated } = useAuthServices();

  return  authenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
