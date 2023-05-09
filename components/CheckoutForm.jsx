import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

const CheckoutForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const cardElement = elements.getElement(CardElement);

      const stripeResponse = await stripe.createToken(cardElement, {
        name: "$id",
      });
      console.log(stripeResponse);
      const responseFromBackend = await axios.post(
        "http://localhost:3000/payment",
        { stripeToken: stripeResponse.token.id }
      );
      // ------NORTHFANK BACKEND______
      console.log(responseFromBackend.data);
      if (responseFromBackend.data === "succeeded") {
        setIsLoading(false);
        setCompleted(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Fromulaire de paiement</h1>
      <CardElement />

      {completed ? (
        <span>Paiement validé</span>
      ) : (
        <button type="submit" disabled={isLoading}>
          Payer
        </button>
      )}
    </form>
  );
};

export default CheckoutForm;
