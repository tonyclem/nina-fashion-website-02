import React from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user_context";
import { CheckoutStep } from "../components";

export const PaymentMethodPage = () => {
  const navigate = useNavigate();
  const { state, dispatch: contextDispatch } = React.useContext(UserContext);
  const {
    cart: { shippingAddress, paymentMethod },
  } = state;

  const [paymentMethodName, setPaymentMethod] = React.useState(
    paymentMethod || "PayPal"
  );

  React.useEffect(() => {
    if (!shippingAddress.address) {
      navigate("/shipping");
    }
  }, [shippingAddress, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    contextDispatch({
      type: "SET_PAYMENT_METHOD",
      payload: paymentMethodName,
    });
    localStorage.setItem("paymentMethod", paymentMethodName);
    navigate("/placeorder");
  };

  return (
    <div className="full-view">
      <CheckoutStep step1 step2 step3 />
      <div className="container small-container">
        <h1 className="my-3">Payment Method</h1>
        <Form onSubmit={submitHandler}>
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="PayPal"
              label="PayPal"
              value="PayPal"
              checked={paymentMethodName === "PayPal"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="Stripe"
              label="Stripe"
              value="Stripe"
              checked={paymentMethodName === "Stripe"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <Button type="submit">Continue</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
