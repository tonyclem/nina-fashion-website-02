import React from "react";

import reducers from "../reducers/user_reducer";
import initialState from "../initialStates/UserInitialState";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducers, initialState);

  const values = {
    state,
    dispatch,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
