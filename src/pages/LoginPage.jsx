import React from "react";
import axios from "axios";
import { signInUser } from "../utils/constants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../context/user_context";
import styled from "styled-components";

export const LoginPage = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { state, dispatch: contextDispatch } = React.useContext(UserContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(signInUser, {
        email,
        password,
      });
      contextDispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate(redirect || "/");
    } catch (error) {
      alert("Invalid Email or Password");
    }
  };

  return (
    <Wrapper>
      <div className="container">
        <h2>Welcome</h2>
        <p>Please login or sign up to continue shopping</p>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
          <span>
            Don't have an account?{" "}
            <Link to={`/signup?redirect=${redirect}`}>Sign up</Link>{" "}
          </span>
          <button>Continue with Google </button>
          <button>Continue with Facebook </button>
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
