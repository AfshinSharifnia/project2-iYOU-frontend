import "./App.css";
import LoginPage from "./pages/LoginPage.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import EditProfile from "./pages/EditProfile";
import Profile from "./pages/Profile";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function getUser() {
      const response = await fetch("/api/auth/"); //PROXY??
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      }
    }
    getUser();
  }, []);

  console.log(user);
  return (
    <BrowserRouter>
      <div>
        {user ? <Navbar user={user} /> : <div />}
        <Routes>
          <Route
            path="/"
            element={user ? <Navigate to="/dashboard" /> : <LandingPage />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit" element={<EditProfile user={user} />} />
          <Route
            path="/dashboard"
            element={user ? <Dashboard user={user} /> : <Navigate to="/" />}
          />

          <Route
            path="/login"
            element={user ? <Navigate to="/dashboard" /> : <LoginPage />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
