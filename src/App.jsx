import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Offer from "./pages/Offer";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Offer/:id" element={<Offer />} />
      </Routes>
    </Router>
  );
}

export default App;
