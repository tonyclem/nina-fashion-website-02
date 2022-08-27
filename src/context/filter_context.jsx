import React from "react";

import initialState from "../initialStates/ProductInitialState";
import reducer from "../reducers/filter_reducer";

const FilterContext = React.createContext();
export const FilterProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const setGridView = () => {
        dispatch({ type: "SET_TO_GRID" });
    }

    const setListView = () => {
        dispatch({ type: "SET_TO_LIST"});
    }

    const values = {
      ...state,
      setGridView,
      setListView,
    };

  return <FilterContext.Provider 
  value={values}
  >{children}</FilterContext.Provider>;
};

export const useFilterContext = () => {
  return React.useContext(FilterContext);
};
