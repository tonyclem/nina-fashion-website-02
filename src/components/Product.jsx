import React from "react";
import { FaSearch } from "react-icons/fa";

import styled from "styled-components";
import { Link } from "react-router-dom";

const Product = ({ imageUrl, name, id, price, description }) => {
  return (
    <Wrapper>
      <div className="container">
        <img src={imageUrl} alt={name} />
        <Link to="/" className="link">
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h1>
          20% Discount <br /> <span>New Arrival Product</span>
        </h1>
      </footer>
      <div>
        <p className="description">{description}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  margin-bottom: 2rem;
  .container {
    position: relative;
    background: var(--on-primary);
    border-radius: 10px 10px 100px 40px;
  }

  img {
    width: 100%;
    display: block;
    object-fit: none;
    border-radius: 10px 10px 100px 40px;
    transition: var(--transition);
  }

  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white-1);
    }
  }

  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }

  footer {
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  footer h1 {
    font-size: 1.8rem;
  }

  footer span {
    font-size: 1.2rem;
  }

  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }

  footer .description {
    display: block;
    text-align: center;
    font-size: 12px;
  }
`;

export default Product;
