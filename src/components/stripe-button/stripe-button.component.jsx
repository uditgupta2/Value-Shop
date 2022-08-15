import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51LWvsFSEzxFOuLdkS5idUVslZNiySfeYioC3bItc0qTCo1QwjcDBG0OaTIZ81hnKWyyUunTEE5oPaR8ThuvBNvoQ001YX14Ay9";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name=""
      Value
      Shop
      Ltd
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
