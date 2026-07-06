// PaymentWrapper.js
import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_REACT_APP_STRIPE_PUBLISHABLE_KEY);

const PaymentWrapper = ({ amount, productName }) => {
  const [paymentStatus, setPaymentStatus] = useState('idle');

  const appearance = {
    theme: 'stripe',
    variables: {
      colorPrimary: '#0570de',
      colorBackground: '#ffffff',
      colorText: '#30313d',
      colorDanger: '#df1b41',
      fontFamily: 'Ideal Sans, system-ui, sans-serif',
      spacingUnit: '2px',
      borderRadius: '4px',
    }
  };

  return (
    <div className="payment-container">
      <h2>Complete Your Purchase</h2>
      <div className="product-info">
        <h3>{productName}</h3>
        <p className="amount">${amount}</p>
      </div>

      <Elements 
        stripe={stripePromise} 
        options={{ 
          appearance,
          clientSecret: 'your-client-secret-here'
        }}
      >
        <PaymentForm 
          amount={amount} 
          onPaymentSuccess={() => setPaymentStatus('success')}
          onPaymentError={() => setPaymentStatus('error')}
        />
      </Elements>
    </div>
  );
};

export default PaymentWrapper;