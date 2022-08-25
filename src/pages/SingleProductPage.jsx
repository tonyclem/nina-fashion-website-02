import React from   'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { useProductsContext } from '../context/products_context';
import { formatPrice } from '../utils/helpers';
import { singleProductUrl as url } from "../utils/constants";

import { Loading, Error, Stars, ProductImages, AddToCart } from '../components';

export const SingleProductPage = () => {
  const params = useParams()
  const {slug} = params;

  const {
    products_loading: loading,
    products_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  React.useEffect(() => {
    fetchSingleProduct(`${url}${slug}`);
  }, [url,slug]);

  if(loading){
    <Loading />
  }

  if(error){
    <Error />
  }

  const {
    name,
    price,
    description,
    brand,
    _id: sku,
    images,
    countInStock,
    rating,
    colors,
    numReviews,} = product

  return (
    <Wrapper>
      <main className="section section-center page">
        <Link to="/products" className="btn">
          Back to products
        </Link>
        <div className="product-center">
          <ProductImages images={images} />

          <section className="content">
            <h2>{name}</h2>
            <Stars stars={rating} />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="description">{description}</p>
            <p className="info">
              <span>Available:</span>{" "}
              <span className="available">
                {countInStock > 0 ? (
                  <span className="in-stock">In Stock</span>
                ) : (
                  <span className="out-of-stock">Out of Stock</span>
                )}
              </span>
            </p>
            <p className="info">
              <span>Sku :</span> {sku}
            </p>
            <p className="info">
              <span>Brand:</span>
              {brand}
            </p>
            <hr />
            {countInStock > 0 && <AddToCart product={product} />}
          </section>
        </div>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .btn {
    margin-top: 1rem;
  }

  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }

  p {
    margin-bottom: 1.25rem;
    color: var(--clr-grey-3);
  }

  .price {
    color: var(--clr-primary-5);
  }

  .description {
    line-height: 1.5;
    max-width: 50em;
  }

  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;

    span {
      font-weight: 700;
    }

    .in-stock {
      color: var(--on-primary-color);
      background-color: var(--clr-primary-7);
      border-radius: 0.25rem;
      width: 75px;
      padding: 0.15rem;
    }

    .out-of-stock {
      color: var(--on-primary-color);
      background-color: var(--clr-error);
      border-radius: 0.25rem;
      padding: 0.15rem;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
    }

    .price {
      font-size: 1.25rem;
    }
  }
`;
