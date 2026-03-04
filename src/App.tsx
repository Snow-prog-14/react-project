import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./components/ProtectedRoute";

export type User = { email: string; password: string };

export function loadUsers(): User[] {
  const raw = localStorage.getItem("users");
  return raw ? (JSON.parse(raw) as User[]) : [];
}

export function saveUsers(users: User[]) {
  localStorage.setItem("users", JSON.stringify(users));
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    localStorage.getItem("isLoggedIn") === "true",
  );

  function handleLogin() {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  }

  function handleLogout() {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />

      <Route path="/register" element={<RegisterPage />} />

      <Route
        path="/home"
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <HomePage onLogout={handleLogout} />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
