const products_reducer = (state, action) => {
  if (action.type === "SIDEBAR_OPEN") {
    return { ...state, isSidebarOpen: true };
  }

  if (action.type === "SIDEBAR_CLOSE") {
    return { ...state, isSidebarOpen: false };
  }

  if(action.type === "GET_PRODUCTS_BEGIN") {
    return { ...state, products_loading: true };
  }

  if(action.type === "GET_PRODUCTS_SUCCESS"){
    const summer_Products = action.payload.filter(
      (product) => product.summerOutFit === true
    );

    return {
      ...state,
      products_loading: false,
      products: action.payload,
      summer_Products,
    };
  }
}

export default products_reducer;