const reducers = (state, action) => {
  if (action.type === "USER_SIGNIN") {
    return { ...state, userInfo: action.payload };
  }

  if (action.type === "USER_SIGNOUT") {
    return { ...state, userInfo: null };
  }
};

export default reducers;
