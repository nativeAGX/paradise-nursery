
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cartItems = useSelector(state => state.cart.items);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="navbar">
      <h2>🌿 Paradise Nursery</h2>

      <nav className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/plants">Plants</Link>

        <Link to="/cart" className="cart-link">
          🛒 Cart ({totalQuantity})
        </Link>
      </nav>
    </header>
  );
}

export default Header;
