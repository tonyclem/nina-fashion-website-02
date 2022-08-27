import React from "react";
import styled from "styled-components";
import queenStyleFirst from "../assets/queenStyle-01.jpeg";
import queenStyleSecond from "../assets/queenStyle-02.jpeg";
import Time from "./time";

const DealView = () => {
  return (
    <Wrapper>
      <section className="container ">
        <div className="info">
          <h3>Deal of The Day</h3>
          <p>
            Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit
            Dolorem. <br />
            Ipsam, reiciendis enim.
          </p>
          <div className="time">
            <Time />
          </div>
          <button className="btn btn-primary">Shop Now</button>
        </div>
        <article className="img-info">
          <img
            src={queenStyleSecond}
            alt="queen style second"
            className="accent-img"
          />
          <img
            src={queenStyleFirst}
            alt="queen style first"
            className="main-img"
          />
        </article>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid: 4rem;
  
  
  .container {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 90%;
    border: 1px solid var(--clr-black);
    margin: 3rem;
    border-radius: var(--radius);
  }

  .info {
    margin: 2rem 3.8rem;
    
    .time{
      padding: 1rem 0;
    }
  }


  .info .btn {
    margin: 1.4rem 0;
  }

  .img-info {
    display: block;
    position: relative;
    margin: 1.4rem;
    margin-left: 8.4rem;
  }

  .accent-img {
    width: 70%;
    height: 300px;
  }

  .main-img {
    width: 65%;
    height: 280px;
    position: absolute;
    left: 0;
    bottom: 0;
    opacity: 0.8;
    transform: translateX(-50%);
  }

  .info button {
    width: 230px;
    height: 42px;
  }

  @media (max-width: 465px) {
    .container {
      width: 80%;
      text-align: center;
    }

    .info {
      text-align: center;

      .time {
        font-size: 0.6rem;

        .digits {
          text-align: center;
        }

        span {
          width: 30px;
          height: 30px;
        }
      }
    }

    .img-info {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .container {
      width: 80%;
      margin: auto;
      text-align: center;
    }

    .img-info {
      display: none;
    }
  }
`;

export default DealView;
