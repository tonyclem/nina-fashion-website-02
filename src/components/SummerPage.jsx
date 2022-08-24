import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import { Loading } from './Loading';
import { useProductsContext } from '../context/products_context';
import Stars from './Stars';
import { formatPrice } from '../utils/helpers';
import Error from './Error';

 const SummerPage = () => {
  const {
    summer_Products,
    products_loading: loading,
    products_error: error,
  } = useProductsContext();



  if(loading){
    <Loading />
  }

  if(error){
    <Error />
  }
  
  console.log(summer_Products);

  return (
    <Wrapper>
      <h1>Summer Sales</h1>
      <div className="container-wrapper">
        {summer_Products?.map((product) => (
          <div className="container" key={product.slug}>
            <div className="row">
              <Link to={`/products/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </Link>
              <div className="row-footer">
                <h4>{product.name}</h4>
                <p>{product.slug}</p>
                <div className="stars">
                  <Stars stars={product.rating} />
                </div>

                <h6>{formatPrice(product.price)}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1 {
    text-align: center;
    padding: 4rem;
    font-size: 3rem;
  }
  .container-wrapper {
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 1rem;

    .container {
      padding-bottom: 3.5rem;
    }

    h1 {
      text-align: center;
    }

    .row {
      text-align: center;

      img {
        width: 200px;
        height: 300px;
        padding: 1.5rem 1rem;
      }

      .row-footer {
        text-align: center;

        h4 {
          font-size: 1.5rem;
        }

        p {
          font-size: 1.4rem;
        }

        h6 {
          font-size: 1.3rem;
        }

        .stars {
          padding: 0.3rem;
          margin: 0 auto;
        }
      }
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 2rem;
      padding: -1rem;
    }
    .container-wrapper {
      grid-template-columns: auto auto;

      .row {
        img {
          width: 160px;
          height: 150px;
        }

        .row-footer {
          h4 {
            font-size: 14px;
          }

          p {
            font-size: 12px;
          }

          .stars {
            font-size: 12px;
          }

          h6 {
            font-size: 12px;
            padding-top: -15px;
          }
        }
      }
    }
  }

  @media (max-width: 400px) {
    .container-wrapper {
      grid-template-columns: auto auto;
    }
  }
`;


export default SummerPage;