import React, { useContext } from "react";
import "./PlaceOrder.css";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const PlaceOrder = () => {
  const { cartItems, food_list } = useContext(StoreContext);
  const navigate = useNavigate();

  // Calculate subtotal
  const subtotal = food_list.reduce((acc, item) => {
    const quantity = cartItems[item._id] || 0;
    return acc + item.price * quantity;
  }, 0);

  // Delivery fee: $2 if subtotal > 0, otherwise 0
  const deliveryFee = subtotal > 0 ? 2 : 0;

  const total = subtotal + deliveryFee;

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/order");
  };

  return (
    <form className="Place-Order" onSubmit={handleSubmit}>
      <div className="Place-Order-Left">
        <p className="title">Delivery Information</p>
        <div className="Multi-Fields">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>
        <input type="email" placeholder="E-mail" required />
        <input type="text" placeholder="Street" required />
        <div className="Multi-Fields">
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="State" required />
        </div>
        <div className="Multi-Fields">
          <input type="text" placeholder="Zip Code" required />
          <input type="text" placeholder="Country" required />
        </div>
        <input type="tel" placeholder="Phone" required />
      </div>

      <div className="Place-Order-Right">
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
          <button type="submit">Proceed To Payment</button>
        </div>

        <div className="cart-Promocode">
          <p>If you have a promo code, Enter it here!</p>
          <div className="cart-PromoCode-Input">
            <input type="text" placeholder="Promo Code" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
