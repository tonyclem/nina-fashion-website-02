import React from "react";
import { useFilterContext } from "../context/filter_context";
import { useProductsContext } from "../context/products_context";
import ProductGridView from "./ProductGridView";
import ProductViews from "./ProductView";

const ProductList = () => {
    const {  grid_view } = useFilterContext();
    const { products } = useProductsContext();


    if(products.length < 1){
        return (
            <h5>Sorry, no products matched your search</h5>
        )
    }

    if(grid_view === false){
        return <ProductViews products={products} />
    }

    return <ProductGridView products={products} >Product list</ProductGridView>
    
}

export default ProductList;

