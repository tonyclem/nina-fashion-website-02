import React from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user_context";
import { CheckoutStep } from "../components";

export const ShippingPage = () => {
  const navigate = useNavigate();
  const { state, dispatch: contextDispatch } = React.useContext(UserContext);
  const {
    userInfo,
    cart: { shippingAddress },
  } = state;

  const [fullName, setFullName] = React.useState(
    shippingAddress.fullName || ""
  );
  const [address, setAddress] = React.useState(shippingAddress.address || "");
  const [city, setCity] = React.useState(shippingAddress.city || "");
  const [postalCode, setPostalCode] = React.useState(
    shippingAddress.postalCode || ""
  );
  const [country, setCountry] = React.useState(shippingAddress.country || "");

  React.useEffect(() => {
    if (!userInfo) {
      navigate("/signin?redirect=/shipping");
    }
  }, [userInfo, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    contextDispatch({
      type: "SAVE_SHIPPING_ADDRESS",
      payload: {
        fullName,
        address,
        city,
        postalCode,
        country,
      },
    });
    localStorage.setItem(
      "shippingAddress",
      JSON.stringify({
        fullName,
        address,
        city,
        postalCode,
        country,
      })
    );
    navigate("/payment");
  };

  return (
    <div className="container small-container">
      <CheckoutStep step1 step2 />
      <h1 className="my-3">Shipping Address</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="my-3" controlId="fullName">
          {/* Full Name */}
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="address">
          {/* Address */}
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="city">
          {/* City */}
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="postal">
          {/* Postal Code */}
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="country">
          {/* country */}
          <Form.Label>Country </Form.Label>
          <Form.Control
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </Form.Group>
        <div className="mb-3">
          <Button variant="primary" type="submit">
            Continue
          </Button>
        </div>
      </Form>
    </div>
  );
};
