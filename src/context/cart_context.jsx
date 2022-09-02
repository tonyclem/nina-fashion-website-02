import React, { useContext, useEffect } from "react";

import reducer from "../reducers/cart_reducer";
import initialState from "../initialStates/CartInitialState";

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const addToCart = (_id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { _id, color, amount, product } });
  };

  const removeItem = (_id) => {
    dispatch({ type: "REMOVE_CART_ITEM", payload: _id });
  };

  const toggleAmount = (_id, value) => {
    dispatch({ type: "TOGGLE_CART_ITEM_AMOUNT", payload: { _id, value } });
  };

  useEffect(() => {
    localStorage.setItem("shopCart", JSON.stringify(state.cart));
  }, [state.cart]);

  const values = {
    ...state,
    addToCart,
    removeItem,
    toggleAmount,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  return useContext(CartContext);
};
