import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <h5 className="last-footer">
        {new Date().getFullYear()} &copy; <span>Lady Nina</span>
      </h5>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background: var(--clr-footer-bg);

  .last-footer {
    margin: 0;
    height: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export default Footer;
