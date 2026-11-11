
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Header from "./Header";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.items);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Header />

      <div className="cart-container">

        <h1>Shopping Cart</h1>

        <h3>
          Total Plants: {totalQuantity}
        </h3>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your Cart is Empty</h2>

            <p>Explore our beautiful collection of plants.</p>

            <div className="cart-actions">
              <Link
                to="/plants"
                className="continue-button"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        ) : (
          <>
            {cartItems.map(item => (
              <div className="cart-row" key={item.id}>

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-details">

                  <h3>{item.name}</h3>

                  <p>
                    Unit Price: ₹{item.price}
                  </p>

                  <p>
                    Quantity: {item.quantity}
                  </p>

                  <p>
                    Item Total: ₹
                    {item.price * item.quantity}
                  </p>

                  <div className="quantity-controls">

                    <button
                      onClick={() =>
                        dispatch(decreaseQuantity(item.id))
                      }
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        dispatch(increaseQuantity(item.id))
                      }
                    >
                      +
                    </button>

                  </div>

                </div>

                <button
                  className="delete-button"
                  onClick={() =>
                    dispatch(removeFromCart(item.id))
                  }
                >
                  Delete
                </button>

              </div>
            ))}

            <div className="cart-summary">

              <h2>Cart Summary</h2>

              <h3>
                Total Plants: {totalQuantity}
              </h3>

              <h2>
                Total Amount: ₹{totalAmount}
              </h2>

              <div className="cart-actions">

                <Link
                  to="/plants"
                  className="continue-button"
                >
                  Continue Shopping
                </Link>

                <button
                  className="checkout-button"
                  onClick={() =>
                    alert("Checkout Coming Soon!")
                  }
                >
                  Checkout
                </button>

              </div>

            </div>
          </>
        )}

      </div>
    </>
  );
}

export default CartItem;
