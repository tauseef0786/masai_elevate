import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import Signup from "./pages/Singup";
import Login from "./pages/Login";
import Dashboard from "./pages/DashBoard";

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return <button onClick={handleLogout} style={{ cursor: "pointer" }}>Logout</button>;
}

function Navigation() {
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <nav style={{
      display: "flex",
      gap: "20px",
      padding: "10px",
      backgroundColor: "#f5f5f5",
      borderBottom: "1px solid #ddd",
      justifyContent: "center"
    }}>
      {isLoggedIn ? (
        <>
          <Link to="/dashboard" style={{ textDecoration: "none", color: "#333" }}>Dashboard</Link>
          <LogoutButton />
        </>
      ) : (
        <>
          <Link to="/signup" style={{ textDecoration: "none", color: "#333" }}>Signup</Link>
          <Link to="/login" style={{ textDecoration: "none", color: "#333" }}>Login</Link>
        </>
      )}
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
