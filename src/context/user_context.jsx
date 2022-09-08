import React from "react";
import axios from "axios";
import { signInUser } from "../utils/constants";
import reducers from "../reducers/user_reducer";
import initialState from "../initialStates/UserInitialState";

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [state, dispatch] = React.useReducer(reducers, initialState);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(signInUser, {
        email,
        password,
      });
      dispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      alert("Couldn't sign in");
    }
  };

  const values = {
    state,
    submitHandler,
    setEmail,
    setPassword,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  return React.useContext(UserContext);
};
