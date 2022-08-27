import React from 'react'
import styled from 'styled-components'
import Fashion from "../assets/fashion-philosophy.jpeg";

const FashionPhilo = () => {
  return (
    <Wrapper>
      <section className="product-center">
        <div className="content">
          <img src={Fashion} alt="philosophy" className="main" />
        </div>

        <div className="p-center">
            <h3>Fashion Philosophy</h3>
          <p>
            "Fashion is part of the daily air and it changes all the time, with
            all the events. You can even see the approaching of a revolution in
            clothes. You can see and feel everything in clothes." 
            <span>Diana Vreeland</span>
          </p>
          <p>
            "Don't be into trends. Don't make fashion own you, but you decide
            what you are, what you want to express by the way you dress and the
            way to live." 
            <span>Gianni Versace</span>
          </p>
        </div>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  margin: 0 3rem;

  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .content{
    margin-left: 2.5rem;
  }

  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: contain;
  }



.p-center {
      h3{
          text-align: center;
          font-size: 2.5rem;
          font-weight: 900;
      }
    p{
        padding: 1.2rem 1.5rem;
        color: ;
    }

    span{
        font-weight: bold;
        padding: 0 0.5rem;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: auto auto;
    }

    .price {
      font-size: 1.25rem;
    }
  }
`;

export default FashionPhilo
