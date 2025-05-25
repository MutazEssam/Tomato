import { createContext } from "react";
import { food_list } from "../assets/frontend_assets/assets";

// 1. Create the context object
export const StoreContext = createContext(null);

// 2. Create a provider component
const StoreContextProvider = (props) => {
    const contextValue = {
        food_list
    };

    return (
        // 3. Use the actual Provider from the context
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
