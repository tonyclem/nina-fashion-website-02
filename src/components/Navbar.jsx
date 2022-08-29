import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaUserAlt, FaBars } from "react-icons/fa";
import logo from "../assets/logo.svg";
import { useProductsContext } from "../context/products_context";
import shoppingBag from "../assets/shoppingbag.svg";


const Navbar = () => {
  const { openSidebar } = useProductsContext();
  return (
    <main>
      <Wrapper>
        <header>
          <div className="nav-advert">
            <p>BUY NOW PAY LATER | FREE SHIPPING | FAST DELIVERY</p>
          </div>
          <div>
            <ul className="ul-contact">
              <div className="contact-list">
                <Link to="/page/contact" className="contact">
                  contact
                </Link>
                <li>
                  service
                </li>
              </div>

              <div className="contact-social">
                <li className="color-instagram">
                  <FaInstagram />
                </li>
                <li className="color-facebook">
                  <FaFacebook />
                </li>
              </div>
            </ul>
          </div>
          <nav className="nav-container">
            <div className="nav-logo">
              <Link to="/">
                <img src={logo} alt="img" />
              </Link>
              <button
                type="button"
                className="nav-toggle"
                onClick={openSidebar}
              >
                <FaBars />
              </button>
            </div>
            <ul className="ul-nav">
              <Link to="/">
                <li className="nav-hover underline">home</li>
              </Link>
              <Link to="/products">
              <li className="nav-hover underline">product</li>
              </Link>
              <Link to="/about">
                <li className="nav-hover underline">about us</li>
              </Link>
            </ul>
            <div className="nav-social ul-nav">
              <span>
                <FaUserAlt />
              </span>
              <span className="bag">
                <img src={shoppingBag} alt="shopping bag" />
                <span className="item-count">
                  <Link to="/cart"></Link>
                </span>
              </span>

              <label className="switch-theme">
                <input type="checkbox" />

                <div className="slider round"></div>
              </label>
            </div>
          </nav>
        </header>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .nav-advert {
    text-align: center;
    color: #fff;
    background-color: #000;
    p {
      font-size: 1rem;
      padding: 0.3rem;
    }
  }

  .ul-contact {
    display: none;

    .contact{
      color: #000;
    }
  }

  .ul-nav {
    display: none;
  }

  .nav-logo {
    padding: 0 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 100px;
      margin-left: -15px;
    }

    .nav-toggle {
      background: transparent;
      border: transparent;
      color: var(--clr-primary-5);
      cursor: pointer;
      svg {
        font-size: 2rem;
      }
    }
  }

  @media (min-width: 992px) {
    main {
      width: 90vw;
    }

    .nav-advert {
      text-align: center;
      color: #fff;
      background-color: #000;
      p {
        font-size: 1.2rem;
        padding: 0.5rem;
      }
    }

    .ul-contact {
      display: flex;
      align-items: center;
      justify-content: space-between;

      div {
        display: flex;
      }

      .contact-list {
        margin-left: 1.9rem;
        margin-right: 1rem;
        li {
          margin-left: 1rem;
        }
      }

      .contact-social {
        margin-right: 1rem;

        .color-instagram {
          color: #e1306c;
        }

        .color-facebook {
          color: blue;
        }
        li {
          margin-top: 0.5rem;
          margin-right: 1rem;
        }
      }
    }

    .nav-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #f1f1f1;

      .nav-logo {
        img {
          width: 110px;
          margin-left: 15px;
        }

        .nav-toggle {
          background: transparent;
          border: transparent;
          cursor: pointer;
          svg {
            font-size: 2rem;
          }
        }
      }

      .ul-nav {
        display: flex;
        gap: 1rem;

        li {
          font-size: 2.1rem;
          font-weight: bold;
          margin-left: 1.5rem;
          text-transform: capitalize;
          position: relative;
          color: #000;
        }

        .nav-hover::after {
          content: " ";
          position: absolute;
          width: 100%;
          height: 3px;
          left: 0;
          bottom: -5px;
          background: var(--clr-green-dark);
        }

        .underline::after {
          transform: scale(0, 1);
          transform-origin: 0% 100%;
          transition: transform 0.3s ease;
        }
        .underline:hover::after {
          transform: scale(1, 1);
        }
      }

      .nav-social {
        margin-right: 3rem;

        span {
          margin-left: 1rem;
          margin-right: 1.5rem;
          font-size: 1.8rem;
        }

        .bag {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;

          img {
            width: 2.2rem;
            height: 2.2rem;
          }

          .item-count {
            margin: 0 auto;
            position: absolute;
            font-size: 1rem;
            font-weight: bold;
            bottom: 5px;

            a {
              color: var(--clr-primary-7);
            }
          }
        }

        .switch-theme {
          display: inline-block;
          height: 34px;
          position: relative;
          width: 60px;

          input {
            display: none;
          }

          .slider {
            background: #ccc;
            bottom: 0;
            cursor: pointer;
            left: 0;
            position: absolute;
            right: 0;
            top: 0;
            transition: 0.4s;
          }

          .slider::before {
            content: " ";
            position: absolute;
            background: #fff;
            bottom: 4px;
            height: 26px;
            left: 4px;
            transition: 0.4s;
            width: 26px;
          }

          input:checked + .slider.round {
            background: var(--on-primary);
          }

          input:checked + .slider::before {
            transform: translateX(26px);
          }

          .slider.round {
            border-radius: 45px;
          }

          .slider.round::before {
            border-radius: 50%;
          }
        }
      }
    }

    .nav-toggle {
      display: none;
    }
  }
`;

export default Navbar;
