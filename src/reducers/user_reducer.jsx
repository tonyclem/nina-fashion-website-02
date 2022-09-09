const reducers = (state, action) => {
  if (action.type === "USER_SIGNIN") {
    return { ...state, userInfo: action.payload };
  }

  if (action.type === "USER_SIGNOUT") {
    return {
      ...state,
      userInfo: null,
      cart: {
        cartItem: [],
        shippingAddress: {},
      },
    };
  }

  if (action.type === "SAVE_SHIPPING_ADDRESS") {
    return {
      ...state,
      cart: { ...state.cart, shippingAddress: action.payload },
    };
  }
};

export default reducers;
