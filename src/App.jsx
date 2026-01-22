import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Top5 from "./pages/Top5";

import { useAuth } from "./context/AuthContext";

export default function App() {
  const { session, loading } = useAuth();

  if (loading) {
    return <div className="p-6 text-center">Loading...</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/top5" element={<Top5 />} />
      <Route
        path="/login"
        element={session ? <Navigate to="/admin" /> : <Login />}
      />
      <Route
        path="/admin"
        element={session ? <Admin /> : <Navigate to="/login" />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
