import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../utils/constants";
import { UserContext } from "../context/user_context";

export const RegisterPage = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const { state, dispatch: contextDispatch } = React.useContext(UserContext);
  const { userInfo } = state;

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Password do not match");
      return;
    }
    try {
      const { data } = await axios.post(registerUser, {
        name,
        email,
        password,
      });
      contextDispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate(redirect || "/");
      toast.success("successfully logged in");
    } catch (error) {
      toast.error("Invalid Email or Password");
    }
  };

  React.useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <Wrapper>
      <div className="container small-container">
        <h2>Sign Up</h2>
        <p>Please Sign up to continue shopping</p>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="email">Name</label>
            <input
              type="name"
              name="name"
              placeholder="Name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
          <div>
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              name="password"
              placeholder="Confirm Password"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <span>
            <span>
              <input type="checkbox" name="checkbox" />
            </span>
            By creating account you have agree with our term & condition
          </span>

          <button type="submit">Sign Up</button>
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
