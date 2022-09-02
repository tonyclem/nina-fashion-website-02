const cart_reducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const { _id, color, amount, product } = action.payload;
    console.log(color, amount, product);
    const tempItem = state.cart.find((item) => item.id === _id + color);

    if (tempItem) {
    } else {
      const newItem = {
        id: _id + color,
        name: product.name,
        color,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.countInStock,
      };

      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  throw new Error(`No Matching ${action.type} - action type`);
};

export default cart_reducer;
