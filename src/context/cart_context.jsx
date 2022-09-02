import React, { useContext } from "react";

import reducer from "../reducers/cart_reducer";
import initialState from "../initialStates/CartInitialState";

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const addToCart = (_id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { _id, color, amount, product } });
  };

  const values = {
    ...state,
    addToCart,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  return useContext(CartContext);
};
