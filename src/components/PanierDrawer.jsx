import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ImgCard from "../components/ImgCard";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ScrollableContent from './ScrollableContent';
import {
    Form,
    TextField,
    Label,
    Input,
    TextArea,
    FieldError
} from "react-aria-components";
import { ChevronRight, ChevronLeft, Sparkles, X, CreditCard, Wallet, EuroIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
//import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import Fab from '@mui/material/Fab';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { useContext, useState } from 'react'
import { CartContext } from './CartContext';

//stripe
//import { Elements } from '@stripe/react-stripe-js';
//import { loadStripe } from '@stripe/stripe-js';
//import CheckoutForm from '../CheckoutForm';


export default function PanierDrawer(
    { isopen, toggleDrawer }) {
    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)
    const [clientSecret, setClientSecret] = useState(null);

    const checkout = () => {
        
        if (cartItems.length === 0) return;

        const formatlist = cartItems.map(element => ({
            id: element.id,
            quantity: element.quantity
        }));

        fetch('http://localhost:3000/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cartlist: formatlist, currency: 'eur' }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.url) {
                   
                    window.location.href = data.url;
                } else {
                    console.error("No URL returned from backend", data);
                }
            })
            .catch((err) => console.error("Fetch failed:", err));
    }


    const list = () => (
        <Box
            role="presentation"

            sx={{ height: '100%' }}

        >
            <div className="flex flex-col h-full w-full bg-stone-50">


                <div className="relative shrink-0 bg-stone-50 pt-6 pb-4 px-4 md:px-6 border-b border-stone-200 z-10 flex flex-col items-center justify-center">


                    <h1 className=" hidden text-xl sm:text-2xl lg:text-3xl text-red-800/90 [text-shadow:_0_10px_30px_rgba(131,24,67,0.4)] z-0 pointer-events-none [-webkit-text-stroke:0.4px_#d4af37] leading-relaxed font-bold text-center font-serif">
                        Panier
                    </h1>





                    <button
                        onClick={() => { toggleDrawer(false); setClientSecret(null); }}
                        className="absolute right-4 top-5 md:right-6 p-2 text-stone-400 hover:text-emerald-950 transition-colors rounded-full hover:bg-stone-200/50"
                        aria-label="Fermer le tiroir"
                    >
                        <X className="w-6 h-6 sm:w-7 sm:h-7" />
                    </button>

                </div>


                <div data-lenis-prevent="true" className="flex-1 overflow-y-auto overscroll-contain px-4 md:px-6 py-6 space-y-8">



                    <div className="flex flex-col h-full bg-stone-50 p-6 sm:p-10 text-emerald-950 shadow-2xl">

                        {!clientSecret &&
                            <div className="flex items-center justify-between border-b border-stone-200 pb-6 mb-6">
                                <h1 className="text-3xl font-serif font-bold text-emerald-950">
                                    Votre Panier
                                </h1>

                            </div>}

                        {/* Cart Items List */}
                        {!clientSecret && <div className="flex flex-col gap-6 flex-grow overflow-y-auto pr-2">
                            {cartItems.map((item) => (
                                <div className="flex justify-between items-center group" key={item.id}>

                                    {/* Image & Title */}
                                    <div className="flex gap-4 items-center">
                                        <img
                                            src={item.thumbnail}
                                            alt={item.title}
                                            className="rounded aspect-square h-20 w-20 object-cover border border-stone-200 shadow-sm bg-white p-1"
                                        />
                                        <div className="flex flex-col">
                                            <h2 className="text-lg font-serif font-bold text-emerald-950 leading-tight">
                                                {item.title}
                                            </h2>
                                            <p className="text-amber-600 font-medium text-sm mt-1">
                                                {item.price} €
                                            </p>
                                        </div>
                                    </div>

                                    {/* Elegant Quantity Controls */}
                                    <div className="flex items-center gap-3 border border-stone-200 rounded-full px-1 py-1 bg-white shadow-sm">
                                        <button
                                            className="w-7 h-7 flex items-center justify-center rounded-full text-stone-400 hover:bg-stone-50 hover:text-emerald-700 transition-colors focus:outline-none"
                                            onClick={() => removeFromCart(item)}
                                        >
                                            -
                                        </button>
                                        <span className="text-sm font-medium w-4 text-center text-emerald-950">
                                            {item.quantity}
                                        </span>
                                        <button
                                            className="w-7 h-7 flex items-center justify-center rounded-full text-stone-400 hover:bg-stone-50 hover:text-emerald-700 transition-colors focus:outline-none"
                                            onClick={() => addToCart(item)}
                                        >
                                            +
                                        </button>
                                    </div>

                                </div>
                            ))}
                        </div>}

                        {/* Cart Footer / Checkout Area */}
                        {cartItems.length > 0 ? (
                            clientSecret ? (<div></div>) : (<div className="flex flex-col gap-5 mt-8 pt-6 border-t border-stone-200">

                                <div className="flex justify-between items-end px-1">
                                    <span className="text-stone-500 uppercase tracking-widest text-xs font-bold">
                                        Total
                                    </span>
                                    <span className="text-2xl font-serif font-bold text-emerald-950">
                                        {getCartTotal()} €
                                    </span>
                                </div>

                                {/* Primary Checkout Button (For Stripe later!) */}
                                <button onClick={() => checkout()} className="w-full bg-emerald-950 text-amber-50 py-4 rounded-[4px] hover:bg-emerald-900 transition-all font-medium text-lg tracking-wide shadow-md hover:shadow-lg">
                                    Valider la commande
                                </button>

                                {/* Subtle Clear Cart Button */}
                                <button
                                    className="text-xs text-stone-400 underline hover:text-red-800 transition-colors text-center mt-2"
                                    onClick={() => clearCart()}
                                >
                                    Vider le panier
                                </button>
                            </div>)
                        ) : (
                            /* Empty State */
                            clientSecret ? (<div></div>) : (<div className="flex flex-col items-center justify-center pb-70  text-center space-y-4">
                                <span className="text-stone-300 text-4xl">🍃</span>
                                <p className="text-lg font-serif text-stone-500 italic">
                                    Votre panier est vide.
                                </p>
                            </div>)
                        )}

                        {/**{clientSecret != null && <Elements stripe={stripePromise} options={{ clientSecret: clientSecret }}>
                            <CheckoutForm />
                        </Elements>} */}

                    </div>





                </div>



                <div className=" hidden shrink-0 sticky bottom-0 z-20 w-full bg-white border-t border-stone-200 p-4 sm:p-6 flex justify-between items-center shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)]">

                    {<Button
                        variant="outlined"
                        startIcon={<ChevronLeft />}

                        onClick={() => {

                        }}
                        sx={{
                            py: 1.2,
                            px: 3,
                            fontSize: '0.9rem',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            color: '#022c22',
                            borderColor: '#022c22',
                            borderWidth: '2px',
                            '&:hover': {
                                borderWidth: '2px',
                                borderColor: '#d97706',
                                color: '#d97706',
                                backgroundColor: 'rgba(217, 119, 6, 0.04)',
                            }
                        }}
                    >
                        Retour
                    </Button>}

                    {<Button
                        variant="contained"
                        type={"button"}
                        form={"info-form"}
                        endIcon={<ChevronRight />}
                        onClick={() => {

                        }}
                        sx={{
                            py: 1.2,
                            px: 4,
                            fontSize: '0.9rem',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            backgroundColor: '#022c22',
                            color: '#ffffff',
                            boxShadow: '0 4px 10px -2px rgba(2, 44, 34, 0.3)',
                            '&:hover': {
                                backgroundColor: '#d97706',
                                boxShadow: '0 4px 10px -2px rgba(217, 119, 6, 0.4)',
                            }
                        }}
                    >
                        Suivant
                    </Button>}
                </div>

            </div>
        </Box>
    );

    return (
        <div>
            <Drawer
                anchor={'right'}
                open={isopen}
                //onClose={toggleDrawer(false)}
                // onClick={toggleDrawer(false)}
                paperprops={{
                    className: "w-full sm:w-[450px] h-full"
                }}
            >
                {list()}
            </Drawer>
        </div>
    );
}