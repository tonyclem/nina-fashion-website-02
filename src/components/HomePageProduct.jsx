import React from 'react'
import { useProductsContext } from '../context/products_context';
import { useFilterContext } from '../context/filter_context';
import GridView from './GridView';
import ListView from './ListView';

const HomePageProduct = () => {
    const { products } = useProductsContext();
    const {grid_view} = useFilterContext()

    if(grid_view === false){
      return  <ListView products={products} />
    }

  return <GridView products={products} />
}

export default HomePageProduct
