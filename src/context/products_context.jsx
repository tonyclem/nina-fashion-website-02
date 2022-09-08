import React from "react";
import axios from "axios";
import reducer from "../reducers/product_reducer";
import { products_url as url } from "../utils/constants";
import initialState from "../initialStates/ProductInitialState";

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: "SIDEBAR_OPEN" });
  };

  const openDropDown = () => {
    dispatch({ type: "DROP_DOWN_OPEN" });
  };

  const closeSidebar = () => {
    dispatch({ type: "SIDEBAR_CLOSE" });
  };

  const fetchProducts = async (url) => {
    dispatch({ type: "GET_PRODUCTS_BEGIN" });
    try {
      const response = await axios.get(url);
      const products = response.data;
      dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: products });
    } catch (error) {
      dispatch({ type: "GET_PRODUCTS_ERROR", payload: error.message });
    }
  };

  const fetchSingleProduct = async (url) => {
    dispatch({ type: "GET_SINGLE_PRODUCT_BEGIN" });
    try {
      const response = await axios.get(url);
      const singleProduct = response.data;
      dispatch({
        type: "GET_SINGLE_PRODUCT_SUCCESS",
        payload: singleProduct,
      });
    } catch (error) {
      dispatch({
        type: "GET_SINGLE_PRODUCT_ERROR",
        payload: error.message,
      });
    }
  };

  React.useEffect(() => {
    fetchProducts(url);
  }, []);

  const values = {
    ...state,
    openSidebar,
    closeSidebar,
    fetchSingleProduct,
    openDropDown,
  };

  return (
    <ProductsContext.Provider value={values}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return React.useContext(ProductsContext);
};
