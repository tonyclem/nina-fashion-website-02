import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import { newArrivalProduct } from "../utils/constants";
import Product from "./Product";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const FeaturedProducts = () => {
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>New Arrival</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        <Carousel breakPoints={breakPoints}>
          {newArrivalProduct.map((product) => {
            return <Product key={product.id} {...product} />;
          })}
        </Carousel>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    

    gap: 2.5rem;
    img {
      width: 280px;
      height: 325px;
    }
  }

  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts;
