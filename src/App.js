// App.js or your main component
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "../src/pages/LandingPage";
import AboutPage from "./pages/About/AboutPages";
import DetailPage from "./pages/Details/DetailPages";
import Header from "./components/header";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}
