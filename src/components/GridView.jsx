import React from 'react'
import AllHomePageProduct from './AllHomePageProduct';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const GridView = ({products}) => {
  return (
    <Wrapper>
      <div className="featured">
        {products.slice(0, 8).map((product) => (
          <AllHomePageProduct key={product.slug} {...product} />
        ))}
      </div>
      <Link to="/products" className="all-btn">
        all products
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 1.5rem;

  .featured {
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 1rem;
  }

  .all-btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
    background: green;
    color: white;
    padding: 0.4rem;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }

  @media (max-width: 996px) {
    .featured {
      grid-template-columns: auto auto;
      gap: -0.5rem;

      .container {
        display: flex;
        align-items: center;
        justify-content: center;

        .item-container {
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 425px) {
    .featured {
      grid-gap: 0.5rem;
    }

    .container {
      justify-content: space-between;

      .item-container {
        width: 100%;

        .item {
          margin: auto;
          width: 150px;
          align-items: center;

          .btn {
            margin: auto;
            left: 0;
            right: 0;
            width: 50%;
            font-size: 12px;
            margin-bottom: 0.5rem;
          }
        }
      }
    }
  }

  @media (max-width: 375px) {
    .item-container {
      width: 100%;

      .item {
        margin: 0;
        width: 110px;
        align-items: center;

        .btn {
          margin: auto;
          left: 0;
          right: 0;
          width: 50%;
          font-size: 10px;
          margin-bottom: 0.5rem;
        }
      }
    }
  }
`;

export default GridView
