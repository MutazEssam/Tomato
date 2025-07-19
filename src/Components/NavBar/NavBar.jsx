import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../Context/StoreContext"; // Import your context

const NavBar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Get cartItems from StoreContext
  const { cartItems } = useContext(StoreContext);

  // Calculate total number of items in cart
  const totalItems = Object.values(cartItems).reduce((acc, qty) => acc + qty, 0);

  const handleMenuClick = (item) => {
    setMenu(item);
    setIsMenuOpen(false);

    if (item === "Home") {
      navigate("/");
      return;
    }

    const section = document.getElementById(item);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, null, `#${item}`);
    }
  };

  const navItems = ["Home", "Menu", "Mobile-App", "Contact-Us"];

  return (
    <div className="navbar">
      {/* Logo links to Home */}
      <img
        src={assets.logo}
        alt="Main Logo"
        className="logo"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      />

      {/* Desktop Menu */}
      <ul className="navbar-menu">
        {navItems.map((item) => (
          <li
            key={item}
            onClick={() => handleMenuClick(item)}
            className={menu === item ? "active" : ""}
          >
            {item.replace("-", " ")}
          </li>
        ))}
      </ul>

      {/* Right Side */}
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search Icon" />

        {/* Cart icon navigates to /cart */}
        <div
          className="navbar-search-icon"
          onClick={() => navigate("/cart")}
          style={{ cursor: "pointer", position: "relative" }}
        >
          <img src={assets.basket_icon} alt="Basket Icon" />
          {/* Replace dot with totalItems count */}
          {totalItems > 0 && (
            <div
              style={{
                position: "absolute",
                top: "-5px",
                right: "-5px",
                background: "red",
                color: "white",
                borderRadius: "50%",
                width: "18px",
                height: "18px",
                fontSize: "12px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              {totalItems}
            </div>
          )}
        </div>

        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>

      {/* Hamburger Icon for Mobile */}
      <button
        className="navbar-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <img src={assets.menu_icon} alt="Menu" />
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="mobile-menu">
          {navItems.map((item) => (
            <li
              key={item}
              onClick={() => handleMenuClick(item)}
              className={menu === item ? "active" : ""}
            >
              {item.replace("-", " ")}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
