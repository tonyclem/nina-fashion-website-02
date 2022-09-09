const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,

  cart: {
    cartItems: localStorage.getItem("shopCart")
      ? JSON.parse(localStorage.getItem("shopCart"))
      : null,

    shippingAddress: localStorage.getItem("shippingAddress")
      ? JSON.parse(localStorage.getItem("shippingAddress"))
      : {},
  },
};

export default initialState;
