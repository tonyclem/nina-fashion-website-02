import React from "react";
import { useFilterContext } from "../context/filter_context";
import ProductGridView from "./ProductGridView";
import ProductListView from "./ProductListView";

const ProductList = () => {
    const {  grid_view, filtered_products: products } = useFilterContext();


    if(products.length < 1){
        return (
            <h5>Sorry, no products matched your search</h5>
        )
    }

    if(grid_view === false){
        return <ProductListView products={products} />;
    }

    return <ProductGridView products={products} >Product list</ProductGridView>
    
}

export default ProductList;

