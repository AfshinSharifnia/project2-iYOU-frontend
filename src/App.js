import "./App.css";
import LoginPage from "./pages/LoginPage.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import EditProfile from "./pages/EditProfile";
import Profile from "./pages/Profile";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
<<<<<<< HEAD
import HomePage from "./pages/HomePage";
import About from "./pages/About";
=======
import Navbar from "./components/Navbar";
>>>>>>> 0efa2564d5d5b49951d56748dbea1a513dbedb9a

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
<<<<<<< HEAD
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          


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
