import { useState } from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';


const CheckoutForm = () => {
  // 1. Initialize Stripe hooks
  

  const stripe = useStripe();
  const elements = useElements();
  
  // 2. Set up state for loading and errors
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    // Prevent default form submission (page refresh)
    event.preventDefault();

    // 3. Make sure Stripe has fully loaded before trying to pay
    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);
    setErrorMessage(null); // Clear any previous errors

    // 4. Confirm the payment with Stripe
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Change this to whatever page you want the user to see after paying
        return_url: `${window.location.origin}/thankyou`, 
      },
    });

    // 5. Handle errors (e.g., declined card, insufficient funds)
    // Note: This point is only reached if there is an immediate error.
    // If successful, Stripe automatically redirects to your return_url.
    if (error) {
      setErrorMessage(error.message);
    }


    setIsLoading(false);
  };

  return (
    // Note: It's better practice to put onSubmit on the form tag 
    // rather than onClick on the button.
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
      
      <PaymentElement />
      
      {/* Display errors to the user */}
      {errorMessage && (
        <div className="text-red-600 bg-red-50 p-3 rounded text-sm font-medium">
          {errorMessage}
        </div>
      )}

      {/* Disable the button while loading or before Stripe initializes */}
      <button 
        type="submit" 
        disabled={!stripe || isLoading}
        className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded transition-colors hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Processing..." : "Submit Payment"}
      </button>

    </form>
  );
};

export default CheckoutForm;