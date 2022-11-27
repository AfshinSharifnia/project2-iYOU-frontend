import "./App.css";
import LoginPage from "./pages/LoginPage.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import EditProfile from "./pages/EditProfile";
import Profile from "./pages/Profile";
import LandingPage from "./pages/LandingPage";

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
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit" element={<EditProfile user={user} />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <LoginPage />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
