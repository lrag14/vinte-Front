import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// $--------[1]------IMPORT DES PAGES---------
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Header from "../components/Headers";
import Footer from "../components/Footer.jsx";
import Publish from "./pages/Publish.jsx";
// -----------------------------
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";

//-----------
import { useState } from "react";
import Cookies from "js-cookie";

// ----------[2]--Importer les routes --------------

function App() {
  const [token, setToken] = useState(Cookies.get("tokenVinted") || null);
  // recherche state--------
  const [search, setSearch] = useState("");

  const handleToken = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("tokenVinted", token, { expires: 1 });
    } else {
      setToken(null);
      Cookies.remove("tokenVinted");
    }
  };
  return (
    <Router>
      <Header
        handleToken={handleToken}
        token={token}
        search={search}
        setSearch={setSearch}
      />
      <Routes>
        {/* -------------- */}
        <Route path="/login" element={<Login handleToken={handleToken} />} />
        <Route path="/signup" element={<Signup handleToken={handleToken} />} />
        {/* -------------- */}
        <Route path="/" element={<Home search={search} />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/publish" element={<Publish />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
