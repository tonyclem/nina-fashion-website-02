import React from "react";
import { useProductsContext } from "./products_context";
import initialState from "../initialStates/FilterInitialState";
import reducer from "../reducers/filter_reducer";

const FilterContext = React.createContext();
export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = React.useReducer(reducer, initialState);

    React.useEffect(()=> {
      dispatch({ type: "LOAD_PRODUCTS", payload: products})
    }, [products]);

    React.useEffect(()=> {
      dispatch({ type: "SORT_PRODUCTS" });
      // dispatch({ type: "FILTER_PRODUCTS"});
    },[products, state.sort]);

    const setGridView = () => {
        dispatch({ type: "SET_TO_GRID" });
    }

    const setListView = () => {
        dispatch({ type: "SET_TO_LIST"});
    }

    const updateSort = (e) => {
      const value = e.target.value;
      dispatch({ type: "UPDATE_SORT", payload: value});
      console.log(value);
    }

    const updateFilters = (e) => {
      let name = e.target.name;
      let value = e.target.value;

      if(name === "category"){
        value = e.target.textContent;
      }

      if(name === "color"){
        value = e.target.dataset.color;
      }

      if(name === "price"){
        value = Number(value);
      }

      if(name === "shipping"){
        value = e.target.checked;
      }

      dispatch({ type: "UPDATE_FILTERS", payload: {name, value}})
    }

    const clearFilters = () => {
      dispatch({ type: "CLEAR_FILTERS" })
    }

    const values = {
      ...state,
      setGridView,
      setListView,
      updateSort,
      updateFilters,
      clearFilters,
    };

  return <FilterContext.Provider 
  value={values}
  >{children}</FilterContext.Provider>;
};

export const useFilterContext = () => {
  return React.useContext(FilterContext);
};