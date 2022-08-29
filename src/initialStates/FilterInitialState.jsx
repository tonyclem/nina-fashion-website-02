const initialState = {
    grid_view: true,
    filtered_products: [],
    all_products: [],
    sort: 'price-lowest',
    filter: {
        text: "",
        company: "all",
        category: "all",
        color: "all",
        min_price: 0,
        max_price: 0,
        price: 0,
        shipping: false
       },
  

}

export default initialState;
