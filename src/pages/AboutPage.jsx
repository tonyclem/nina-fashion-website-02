import React from "react";
import styled from "styled-components";
import queenStyle from "../assets/queenStyle-01.jpeg";
export const AboutPage = () => {
  return (
    <main>
      <Wrapper className="page section section-center">
        <img src={queenStyle} alt="about imag" />
        <article>
          <div className="title">
            <h2>Our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis sapiente non libero maxime saepe eaque nobis suscipit
            quae soluta. Molestias dolorum eos eaque error autem tenetur
            explicabo quia sequi deserunt. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Perspiciatis sapiente non libero
            maxime saepe eaque nobis suscipit quae soluta. Molestias dolorum eos
            eaque error autem tenetur explicabo quia sequi deserunt.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: contain;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: center;
  }
  .underline {
    margin-left: auto;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;


