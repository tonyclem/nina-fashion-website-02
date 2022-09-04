import React from "react";
import styled from "styled-components";

export const RegisterPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <h2>Sign Up</h2>
        <p>Please Sign up to continue shopping</p>
        <form>
          <div>
            <label htmlFor="email">Name</label>
            <input type="name" name="name" placeholder="Name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div>
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              name="password"
              placeholder="Confirm Password"
            />
          </div>
          <span>
            <span>
              <input type="checkbox" name="checkbox" />
            </span>
            By creating account you have agree with our term & condition
          </span>
          <button type="submit">Login</button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #f7f7f7;

  .container {
    padding: 1rem 3rem;
    padding-bottom: 2rem;
    border-radius: 0.5rem;
    border-top: var(--clr-primary-5) solid 0.5rem;
    background: #fff;

    h2 {
      margin: 1rem 0;
    }

    p {
      padding-bottom: 1.2rem;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    form div {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;

      input {
        border: 1px solid green;
      }
    }

    input {
      padding: 0.5rem;
      border-radius: 0.3rem;
      border: 1px solid gray;
      font-size: 1.1rem;
    }

    button {
      background-color: var(--clr-primary-5);
      color: #fff;
      border: none;
      padding: 0.5rem;
      height: 2.5rem;
      text-transform: uppercase;
      cursor: pointer;
      border-radius: 0.3rem;
      margin-top: 1rem;
    }

    span {
      margin-right: 0.5rem;
      padding-top: 0.5rem;
      font-size: 1.1rem;
      align-items: center;
    }

    span a {
      text-decoration: none;
      color: var(--clr-primary-5);
    }
  }
`;
