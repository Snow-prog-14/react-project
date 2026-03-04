import {  Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import WatchPage from "./pages/WatchPage";
import ShortsPage from "./pages/ShortsPage";
import Layout from "./layout/Layout";

import "./App.css";
import "./index.css";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true",
  );

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <Routes>
      {/* Default route */}
      <Route
        path="/"
        element={<Navigate to={isLoggedIn ? "/home" : "/login"} replace />}
      />

      {/* Public routes */}
      <Route
        path="/login"
        element={
          isLoggedIn ? <Navigate to="/home" replace /> : <LoginPage onLogin={handleLogin} />
        }
      />
      <Route
        path="/register"
        element={isLoggedIn ? <Navigate to="/home" replace /> : <RegisterPage />}
      />

      {/* Protected routes */}
      <Route
        path="/home"
        element={isLoggedIn ? <HomePage onLogout={handleLogout} /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/watch/:id"
        element={isLoggedIn ? <WatchPage /> : <Navigate to="/login" replace />}
      />

      <Route
        path="/shorts"
        element={
          isLoggedIn ? <ShortsPage onLogout={handleLogout} /> : <Navigate to="/login" replace />
        }
      />

      <Route
  element={isLoggedIn ? <Layout onLogout={handleLogout} /> : <Navigate to="/login" replace />}
  >
    <Route path="/home" element={<HomePage />} />
    <Route path="/watch/:id" element={<WatchPage />} />
    <Route path="/shorts" element={<ShortsPage />} />
  </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>

    
  );
}