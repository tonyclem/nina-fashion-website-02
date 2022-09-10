import React from "react";
import { Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import CheckoutStep from "../components/CheckoutStep";
import { UserContext } from "../context/user_context";

export const PlaceOrderPage = () => {
  const navigate = useNavigate();
  const { state, dispatch: contextDispatch } = React.useContext(UserContext);
  const { cart, userInfo } = state;

  const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100;

  cart.itemsPrice = round2(
    cart.cartItems.reduce((a, c) => a + c.amount * c.price, 0)
  );

  cart.taxPrice = round2(cart.itemsPrice * 0.15);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;
  cart.shippingPrice = cart.totalPrice > 100 ? round2(0) : round2(10);

  const placeOrderHandler = async () => {};

  React.useEffect(() => {
    if (!cart.paymentMethod) {
      navigate("/payment");
    }
  }, [cart, navigate]);

  return (
    <Wrapper>
      <div className="full-view-container">
        <CheckoutStep step1 step2 step3 step4 />
        <h1 className="my-3">Preview Order</h1>
        <Row>
          <Col md={8}>
            {/* Shipping Address */}
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Shipping</Card.Title>
                <Card.Text>
                  <strong>Name:</strong>
                  {cart.shippingAddress.fullName} <br />
                  <strong>Address:</strong>
                  {cart.shippingAddress.address},{cart.shippingAddress.city},{" "}
                  {cart.shippingAddress.postalCode},{" "}
                  {cart.shippingAddress.country}
                </Card.Text>
                <Link to="/shipping">Edit</Link>
              </Card.Body>
            </Card>
            {/* Payment */}
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Payment</Card.Title>
                <Card.Text>
                  <strong>Method:</strong>
                  {cart.paymentMethod}
                </Card.Text>
                <Link to="/payment">Edit</Link>
              </Card.Body>
            </Card>
            {/* Item */}
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Items</Card.Title>
                <ListGroup variant="flush">
                  <Row className="align-items-center">
                    {cart.cartItems.map((item) => (
                      <ListGroup.Item key={item._id}>
                        <Row className="align-items-center">
                          <Col md={6}>
                            <img
                              className="img-fluid rounded img-thumbnail"
                              src={item.image}
                              alt={item.name}
                            />
                            <Link to={`/products/${item.slug}`}>
                              {item.name}
                            </Link>
                          </Col>
                          <Col md={3}>
                            <span>{item.amount}</span>
                          </Col>
                          <Col md={3}>{formatPrice(item.price)}</Col>
                        </Row>
                      </ListGroup.Item>
                    ))}
                  </Row>
                </ListGroup>
                <Link to="/cart">Edit</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Order Summary</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Items</Col>
                      <Col>{formatPrice(cart.itemsPrice?.toFixed(2))}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Shipping</Col>
                      <Col>{formatPrice(cart.shippingPrice?.toFixed(2))}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Tax</Col>
                      <Col>{formatPrice(cart.taxPrice?.toFixed(2))}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>
                        <span>Order total</span>
                      </Col>
                      <Col>
                        <strong>
                          {formatPrice(cart.totalPrice?.toFixed(2))}
                        </strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button
                        type="button"
                        onClick={placeOrderHandler}
                        disabled={cart.cartItems.length === 0}
                      >
                        {" "}
                        Place order
                      </Button>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .full-view-container {
    margin: 3rem;
  }
`;
