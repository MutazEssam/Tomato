import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

// 1. Create the context
export const StoreContext = createContext(null);

// 2. Provider component
const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  // Add to cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  // Remove 1 quantity from cart (do not remove whole item unless count is 1)
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const quantity = prev[itemId];
      if (!quantity) return prev; // item not in cart

      if (quantity === 1) {
        const updatedCart = { ...prev };
        delete updatedCart[itemId];
        return updatedCart;
      } else {
        return {
          ...prev,
          [itemId]: quantity - 1,
        };
      }
    });
  };

  useEffect(() => {
    console.log("🛒 Cart Items:", cartItems);
  }, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
