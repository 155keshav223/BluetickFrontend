import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Blog from "./components/Blog";
import LetsConnect from './components/LetsConnect';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Footer from './components/Footer';
import "./index.css"
function App() {
  return (
    <BrowserRouter>
    <div className="app-container">
        <Navbar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/letsconnect" element={<LetsConnect />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;

