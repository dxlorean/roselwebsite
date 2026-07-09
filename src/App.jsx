

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Pricing from "./components/Pricing"
import Footer from "./components/Footer"
import Soins from "./components/Soins"
import Offers from "./components/Offers"
import Cadeaux from "./components/Cadeaux"
import Contact from './components/Contact';
import Entreprise from './components/Entreprise';
import EHPAD from './components/EHPAD';
import AnchorTemporaryDrawer from "./components/DrawerFunnel"
import PanierDrawer from "./components/PanierDrawer"
import { useEffect } from "react"
import Button from "@mui/material/Button";
import { useState, useContext } from "react"
import Lenis from 'lenis'


import { Link, Route, Routes, useLocation, Navigate } from 'react-router-dom'
import About from "./components/AboutPage"
import Shop from "./components/Shop"
import ThankYou from "./components/Thankyou"


// stupid comment8
function App() {

 


  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const location = useLocation();

  useEffect(() => {
    // Check if the URL has a hash (like #offers)
    if (location.hash) {
      // Remove the '#' to get just the ID string ('offers')
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        // The setTimeout is the magic trick! 
        // It forces React to wait 100ms for the DOM to finish painting before scrolling.
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.hash]); // Re-run this if the hash changes

  /* useEffect(() => {
     fetch('http://localhost:3000/create-checkout-session', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({ amount: 50, currency: 'eur' }),
     })
       .then((res) => res.json())
       .then((data) => {
         // 3. Save the exact string to state
         setClientSecret(data.clientSecret);
       })
       .catch((err) => console.error("Fetch failed:", err));
   }, []);*/


  const [state, setState] = useState(false); //DRAWER STATE
  const [step, setStep] = useState(1); //DRAWER STATE
  const [devis, setDevis] = useState(false);
  const [service, setService] = useState(null);

  const [cartState, setCartState] = useState(false); //cart state

  const toggleCart = (open) => (event) => {
    setCartState(open);

  };
  const toggleCartSimple = (open) => {
    setCartState(open);
  };


  const toggleDrawer = (open, step, isdevis, service) => (event) => {
    setState(open);
    setStep(step);
    setDevis(isdevis)
    setService(service);
  };

  const toggleDrawerSimple = (open, step, isdevis, service) => {
    setState(open);
    setStep(step);
    setDevis(isdevis)
    setService(service);
  };


  return (<div className="min-h-screen bg-amber-50 text-black overflow-hidden" >

    <Navbar toggleCart={toggleCartSimple} />





    <Routes>
      
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={
        <div>
          <Hero toggleDrawer={toggleDrawer} />
          <Soins toggleDrawer={toggleDrawer} />
          <Entreprise toggleDrawer={toggleDrawer} />
          <EHPAD toggleDrawer={toggleDrawer} />
          <Features />
          <Contact />
        </div>
      } />
      <Route path="/about" element={
        <div>
          <About toggleDrawer={toggleDrawer} />
        </div>
      } />
      <Route path="/shop" element={
        <div>
          <Shop toggleDrawer={toggleCartSimple} />
        </div>
      } />
      <Route path="/thankyou" element={

        
        <ThankYou/>
      } />


    </Routes>
    <Footer />


    <AnchorTemporaryDrawer toggleDrawer={toggleDrawerSimple} service={service} isopen={state} isdevis={devis} initstep={step} />
    <PanierDrawer toggleDrawer={toggleCartSimple} isopen={cartState} />

    {/*toggleDrawer={toggleDrawer} step={2} isdevis={false} */}
  </div>)
}
{/** {clientSecret &&  <Elements stripe={stripePromise} options={{ clientSecret: clientSecret }}>
      <CheckoutForm/>
    </Elements>} */}
export default App
