import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import "./checkout.css"

const stripePromise = loadStripe('pk_test_51QP63tCrB2sm7ASUaAeSxUlr3S1n9Yqctw9q16ErY3pkeTvIxt7xpFLsRhO9nRuvCsUpEhF53H7ZYcKPuBWPVCk00029NKB5H');

// Checkout Form Component
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error(error);
    } else {
      alert('Payment successful! No backend to verify, but integration works!');
      console.log(paymentMethod); // For testing
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay Now!!!!!
      </button>
    </form>
  );
};

// Main Checkout Component
const Checkout = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Checkout;
