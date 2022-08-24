import React from 'react';
import axios from "axios";
import reducer from "../reducers/product_reducer";
import { products_url as url } from '../utils/constants';

const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
};

const ProductsContext = React.createContext();

export const  ProductsProvider = ({children}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

     const openSidebar = () => {
       dispatch({ type: "SIDEBAR_OPEN" });
     };

     const closeSidebar = () => {
       dispatch({ type: "SIDEBAR_CLOSE" });
     };

     const fetchProducts = async (url) => {
      dispatch({  type: "GET_PRODUCTS_BEGIN"})
      try {
        const  response = await axios.get(url);
        const products = response.data;
        dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: products });
      } catch (error) {
        dispatch({ type: "GET_PRODUCTS_ERROR", payload: error.message });
      }
     }

     React.useEffect(()=> {
      fetchProducts(url);
     },[])

    const values = {
      ...state,
      openSidebar,
      closeSidebar,
    };

    return (
        <ProductsContext.Provider value={values}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => {
    return React.useContext(ProductsContext)
}