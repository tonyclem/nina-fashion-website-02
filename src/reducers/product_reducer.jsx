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

  if(action.type === "GET_SINGLE_PRODUCT_BEGIN"){
    return {
      ...state, single_product_loading: true,
      single_product_error: false,
    }
  }

  if(action.type === "GET_SINGLE_PRODUCT_SUCCESS"){
    return {
      ...state, single_product_loading: false,
      single_product: action.payload
    }
  }

  if(action.type === "GET_SINGLE_PRODUCT_ERROR"){
    return { ...state, single_product_loading: false,
      single_product_error: true
    }
  }

   throw new Error(`No Matching "${action.type}" - action type`);
}

export default products_reducer;