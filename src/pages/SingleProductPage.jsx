import React from   'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { formatPrice } from '../utils/helpers';

import { Loading, Error, Stars } from '../components';

export const SingleProductPage = () => {
  const params = useParams()
  const {slug} = params;
  return (
    <div>
      <h1>{slug} </h1>
    </div>
  );
};


