import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function getUser() {
      const response = await fetch("/auth"); //PROXY??
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
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
