const reducers = (state, action) => {
  if (action.type === "USER_SIGNIN") {
    return { ...state, userInfo: action.payload };
  }
};

export default reducers;
