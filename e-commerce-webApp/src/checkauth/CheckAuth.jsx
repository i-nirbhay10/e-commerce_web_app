import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  if (location.pathname === "/") {
    if (!isAuthenticated) {
      return <Navigate to="/auth/register" />;
    } else if (isAuthenticated && user.role === "user") {
      return <Navigate to="/user/home" />;
    }
  } else if (location.pathname === "/user") {
    if (isAuthenticated && user.role === "user") {
      return <Navigate to="/user/home" />;
    } else {
      return <Navigate to="/auth/login" />;
    }
  }

  return <>{children}</>;
}

export default CheckAuth;
