import React from "react";
import styled from "styled-components";
import { BsHeart } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/helpers";

const AllHomePageProduct = (products) => {
  const { _id: id, image, name, description, price, slug } = products;

  return (
    <Wrapper>
      <div className="container">
        <div className="item-container" key={id}>
          <div
            className="item"
            style={{
              backgroundImage: `url(${image})`,
              objectFit: "contain",
            }}
          >
            <span>
              <BsHeart />
            </span>
            <Link to={`/products/${slug}`} className="link">
              <FaRegEye />
            </Link>
            <button className="btn btn-color">{formatPrice(price)}</button>
          </div>
          <footer>
            <h5>{name}</h5>
            <p>{description.substring(0, 20)}...</p>
          </footer>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 2.3rem;

  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  .item {
    width: 220px;
    height: 310px;
    background: gray;
    border-radius: var(--radius);
    position: relative;
    background-position: center;
    background-repeat: no-repeat;

    img {
      object-fit: center;
    }
  }

  .item span {
    position: absolute;
    right: 1.5rem;
    top: 1.2rem;
    font-size: 1.2rem;
  }

  .btn {
    position: absolute;
    bottom: 0;
    align-items: center;
    margin-bottom: 1.5rem;
    left: 4rem;
    color: #000;
    background: #f1f1f1;
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
    hight: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }

  .item:hover {
    opacity: 0.5;
  }

  .item:hover .link {
    opacity: 1;
  }

  footer {
    margin: 0.8rem;
    text-align: center;
  }

  footer p {
    font-size: 12px;
  }
`;

export default AllHomePageProduct;
