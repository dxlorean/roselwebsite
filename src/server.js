// server.js
import 'dotenv/config';

import express from 'express';
import stripe_import from 'stripe';
const stripe = new stripe_import(process.env.STRIPE_SECRET_KEY);
import cors from 'cors';




const app = express();

app.use(cors());
app.use(express.json());

 const productInfo = {
  1: { title: "Thé Cassis", price: 25 }
}

app.post('/create-checkout-session', async (req, res) => {
  try {
    const { cartlist, currency } = req.body;

    if (!cartlist || cartlist.length === 0) {
      return res.status(400).json({ error: "Le panier est vide." });
    }

    
    const lineItems = cartlist.map(item => {
      const product = productInfo[item.id];
      if (!product) throw new Error(`Produit invalide: ${item.id}`);

      return {
        price_data: {
          currency: currency || 'eur',
          product_data: {
            name: product.title, 
            //  images: [product.thumbnail]
          },
          unit_amount: product.price * 100, // Stripe expects cents
        },
        quantity: parseInt(item.quantity),
      };
    });

    // 2. Create the Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      
    
      shipping_address_collection: {
        allowed_countries: ['FR', 'BE', 'CH'], // France, Belgium, Switzerland (modify as needed)
      },

  
      success_url: `${req.headers.origin}/thankyou`,
      cancel_url: `${req.headers.origin}/home#home`, 
    });

    // 3. Send the Stripe URL back to React
    res.json({ url: session.url });

  } catch (error) {
    console.error("Checkout Error:", error.message);
    res.status(400).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});