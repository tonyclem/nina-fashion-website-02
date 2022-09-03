import React from "react";
import styled from "styled-components";
import { comments } from "../utils/constants";

const Reviewer = () => {
  return (
    <Wrapper>
      <section className="section-center">
        <h2>What people say about us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          voluptatem eaque?
        </p>

        <div className="text-container">
          {comments.map((commentDb) => {
            const { id, imageUrl, comment, name, title, more } = commentDb;
            return (
              <article key={id} className="container">
                <h5>{comment}</h5>
                <p>{more}</p>
                <div className="box">
                  <img
                    src={imageUrl}
                    alt="comment img"
                    className="box-header"
                  />
                  <p>{name}</p>
                  <p>{title}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  p {
    padding: 0.8rem;
  }

  text-align: center;

  .text-container {
    color: #fff;
    width: 200px;
    margin-top: 4rem;
    text-align: center;
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 2.5rem;
  }

  .container {
    width: 370px;
    background: #1a1a1a;
    padding: 1.3rem 0.9rem;
    border-radius: 0.5rem;
    margin-top: 0.5rem;
  }

  .container p {
    color: #fff;
  }

  .box {
    text-align: center;
  }
  .box-header {
    border-radius: 50%;
    background-color: #fff;
    width: 100px;
    height: 100px;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 992px) {
    p {
      margin-button: 2rem;
    }

    .text-container {
      grid-template-columns: 1fr;
      margin: 1.5rem auto;
      width: 100%;

      .container {
        margin: auto;
      }
    }
  }
  @media (max-width: 576px) {
    p {
      margin-button: 2rem;
    }
    .text-container {
      grid-template-columns: 1fr;
      margin: auto;
      margin: 1.5rem auto;
      width: 100%;

      .container {
        margin: auto;
      }
    }
  }
`;

export default Reviewer;
