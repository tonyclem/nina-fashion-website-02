import React from 'react';
import styled from 'styled-components';

  export const ContactUsPage = () => {
  return (
    <Wrapper>
      <h4>
        Do you have a question or comment ? Fill in the contact form below, we
        aim to answer your question within 3 working days.
      </h4>

      <form action="https://formspree.io/f/xzbolrdy" method="POST">
        <div className="form-group">
          <span>
            <label htmlFor="name">Name</label>
            <input type="name" />
          </span>
          <span>
            <label htmlFor="email">Email</label>
            <input type="email" name="_replyto" />
          </span>
        </div>
        <label htmlFor="number">Phone Number</label>
        <input type="phone" />

        <label htmlFor="message">Message</label>
        <textarea name="text" cols="30" rows="10"></textarea>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Wrapper>
  );
}


const Wrapper = styled.div`
  h4 {
    text-align: center;
    margin: auto;
    margin: 3.5rem 5rem;
  }
  margin: auto 0;
  align-items: center;

  height: 100vh;
  form {
    display: block;
    width: 800px;
    margin: auto;

    .form-group {
      display: flex;

      span {
        width: 100%;
        display: block;

        label {
          font-size: 1rem;
          padding-bottom: 0.5rem;
        }

        input {
          height: 2.5rem;
          margin-right: 1rem;
          padding: 1.7px;
          font-size: 1.3rem;
        }
      }
    }

    label {
      font-size: 1rem;
      padding: 0.5rem 0 0.5rem 0;
    }

    input {
      height: 2.5rem;
      margin: 0.5rem 0;
      padding: 1.7px;
      font-size: 1.3rem;
    }

    textarea {
      padding: 10px;
      font-family: "Twentieth Century", sans-serif;
      text-decoration: none;
    }

    textarea,
    input,
    label {
      display: block;
      width: 100%;
    }
    button {
      height: 2rem;
    }
    .btn {
      margin-top: 2rem;
      width: 100%;
    }
  }
`;