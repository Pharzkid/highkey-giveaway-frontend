import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = localStorage.getItem("user"); // or "token" if you store a token
  return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
