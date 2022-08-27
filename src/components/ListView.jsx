import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/helpers";

const ListView = ({ products }) => {

  return (
    <Wrapper>
      {products.slice(0, 8).map((product) => {
        const { _id: id, image, name, price, description, } = product;
        return (
          <article key={id}>
            <img src={image} alt={name} />

            <div>
              <h4>{name}</h4>
              <button className="btn btn-color">{formatPrice(price)}</button>
              <p>{description}</p>

              <button type="button" className="btn">
                Add to cart
              </button>
            </div>
          </article>
        );
      })}
      <Link to="/products" className="all-btn">
        all products
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  margin: 3rem;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 220px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }

  .btn {
    bottom: 0;
    align-items: center;
    margin-bottom: 1.5rem;
    left: 4rem;
    color: #000;
    background: #f1f1f1;
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

  h4 {
    margin-bottom: 0.5rem;
  }

  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.7rem;
  }

  p {
    max-width: 45em;
    margin-bottom: 0.7rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }

  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;

export default ListView;
