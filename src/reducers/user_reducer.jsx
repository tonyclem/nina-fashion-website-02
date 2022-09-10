const reducers = (state, action) => {
  if (action.type === "CART_CLEAR") {
    return { ...state, cart: { ...state.cart, cartItems: [] } };
  }

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
        paymentMethod: "",
      },
    };
  }

  if (action.type === "SAVE_SHIPPING_ADDRESS") {
    return {
      ...state,
      cart: { ...state.cart, shippingAddress: action.payload },
    };
  }

  if (action.type === "SET_PAYMENT_METHOD") {
    return {
      ...state,
      cart: { ...state.cart, paymentMethod: action.payload },
    };
  }
};

export default reducers;
