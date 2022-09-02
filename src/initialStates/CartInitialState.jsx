const getLocalStorage = () => {
  let cart = localStorage.getItem("shopCart");
  if (cart) {
    return JSON.parse(localStorage.getItem("shopCart"));
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 550,
};

export default initialState;
