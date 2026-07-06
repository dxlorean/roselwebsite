import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
export default function ThankYou() {
  
 const { clearCart } = useContext(CartContext)
  useEffect(() => {
        console.log("CLEARING CART!")
      setTimeout(() => {
        clearCart();
      }, 300)
      
    
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 pt-32 pb-20 flex flex-col items-center justify-center text-center px-6">
      
      {/* Elegant Checkmark Icon */}
      <div className="w-20 h-20 bg-emerald-950 text-amber-50 rounded-full flex items-center justify-center text-4xl mb-8 shadow-md">
        ✓
      </div>

      {/* Main Title */}
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-emerald-950 mb-6">
        Merci pour votre commande !
      </h1>

      {/* Subtitle / Reassurance */}
      <p className="text-lg text-emerald-950/80 max-w-lg mb-12 font-serif leading-relaxed">
        Votre paiement a bien été validé. Vous recevrez d'ici quelques minutes un e-mail de confirmation contenant les détails de votre livraison.
      </p>

      {/* Return Button */}
      <Link
        to="/home#home"
        onClick={() => clearCart()}
        className="px-8 py-4 bg-emerald-950 text-amber-50 font-medium rounded-[4px] hover:bg-emerald-900 transition-all shadow-md hover:shadow-lg tracking-wide border border-emerald-950"
      >
        Retour à l'accueil
      </Link>
      
    </div>
  );
}