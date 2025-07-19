import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
  const navigate = useNavigate();

  // Remove all quantities of an item from cart
  const handleRemoveAll = (id) => {
    removeFromCart(id, true); // Assuming this clears all quantities
  };

  // Calculate subtotal dynamically
  const subtotal = Object.entries(cartItems).reduce((acc, [id, qty]) => {
    const item = food_list.find((food) => food._id === id);
    if (!item) return acc;
    return acc + item.price * qty;
  }, 0);

  // Delivery fee: $2 if there are items in cart, $0 if empty
  const deliveryFee = subtotal > 0 ? 2 : 0;

  const total = subtotal + deliveryFee;

  return (
    <div className="cart">
      <div className="cart-Items">
        <div className="cart-Items-Title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {food_list
          .filter((item) => cartItems?.[item._id] > 0)
          .map((item) => (
            <div key={item._id}>
              <div className="cart-Items-Title cart-items-item">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.price.toFixed(2)}</p>
                <p>{cartItems[item._id]}</p>
                <p>${(item.price * cartItems[item._id]).toFixed(2)}</p>
                <p
                  onClick={() => handleRemoveAll(item._id)}
                  className="Remove"
                  style={{ cursor: "pointer", color: "red" }}
                >
                  x
                </p>
              </div>
              <hr />
            </div>
          ))}
      </div>

      <div className="cart-Bottom">
        <div className="cart-Total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Fees</p>
              <p>${deliveryFee.toFixed(2)}</p>
            </div>
            <div className="cart-total-details">
              <p>Total</p>
              <p>${total.toFixed(2)}</p>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>
            Proceed To Checkout
          </button>
        </div>
        <div className="cart-Promocode">
          <p>If you have a promo code, Enter It Here!</p>
          <div className="cart-PromoCode-Input">
            <input type="text" placeholder="Promo Code" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
