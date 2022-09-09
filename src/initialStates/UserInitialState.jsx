const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,

  cart: localStorage.getItem("shopCart")
    ? JSON.parse(localStorage.getItem("shopCart"))
    : null,
};

export default initialState;
