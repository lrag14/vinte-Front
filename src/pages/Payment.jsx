// import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
//-------component
import CheckoutForm from "../../components/CheckoutForm.jsx";

const stripePromise = loadStripe(
  "pk_test_51N5t4pGwOgwxN1AMPcuMAKFvNsXbzDaIzTY5xaIx59wwwR14XJXq8uCX3WNbol6W1HAvakSMED1btP5m3ELPqDT900l4xfgXxU"
);

const Payment = () => {
  //   const location = useLocation();
  //   const { title } = location.state;

  return (
    <div>
      <Elements stripe={stripePromise}></Elements>
      <CheckoutForm />
    </div>
  );
};

export default Payment;
