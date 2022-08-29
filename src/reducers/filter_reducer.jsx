
const filter_reducer = (state, action) => {

    if(action.type === "SET_TO_GRID"){
        return {...state, grid_view: true}
    }

    if(action.type === "SET_TO_LIST"){
        return { ...state, grid_view: false };
    }

    if(action.type === "LOAD_PRODUCTS"){
        let maxPrice = action.payload.map((p) => p.price);
        maxPrice = Math.max(...maxPrice);

        return { 
            ...state, all_products:[...action.payload],
        filtered_products:[...action.payload],
        filters: { ...state.filters, max_price: maxPrice, price: maxPrice},
        }
    }

    if(action.type === "SORT_PRODUCTS"){
        const {sort, filtered_products} = state;

        let tempProducts = [...filtered_products];

        if(sort === "price-lowest"){
            tempProducts = tempProducts.sort((a, b) => a.price < b.price);
        }

        if(sort === "price-highest"){
            tempProducts = tempProducts.sort((a, b) => b.price - a.price);
        }

        if(sort === "name-a"){
            tempProducts = tempProducts.sort((a, b) => a.name.localeCompare(b.name));
        }

        if(sort === "name-z"){
            tempProducts = tempProducts.sort((a, b) => b.name.localeCompare(a.name));
        }

        return {...state, filtered_products: tempProducts}
    }

    if(action.type === "FILTER_PRODUCTS"){
        const {all_products} = state;
        const { text, category, company, color, price, shipping} = state.filters;

        let tempProducts = [...all_products];

        // filtering the products
        // Filter by Text
        if(text){
            tempProducts = tempProducts.filter((product) => {
                return product.name.toLowerCase().startsWith(text);
            })
        }

        // Filter by Category
        if(category !== "all"){
            tempProducts = tempProducts.filter((product) => 
                product.category === category
            );
        }
    }

    throw new Error(`Invalid action ${action.type}`);
}

export default filter_reducer
