
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

import "./App.css";

function Home() {
  return (
    <div className="landing-page">
      <div className="hero-content">
        <h1>Paradise Nursery</h1>

        <h2>Bring Nature Into Your Home</h2>

        <AboutUs />

        <Link to="/plants" className="get-started">
          Get Started
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  );
}

export default App;
