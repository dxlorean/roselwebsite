import { Sparkles } from 'lucide-react';
import ImgCard from "../components/ImgCard";
import Button from '@mui/material/Button';

import { useContext } from 'react'
import { CartContext } from './CartContext';


export default function Shop({ toggleDrawer }) {
    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)

    const productInfo = {
        'HibiscusCassis': {
            id: 1, title: "Thé Cassis", price: 25, thumbnail: "public/product_5.png"
        }
    }

    return (


        <section id="shop" className="scroll-mt-[110px] relative min-h-screen bg-amber-50 flex flex-col items-center pt-24 md:pt-32 pb-16 px-6 lg:px-8 overflow-hidden">


            {/* The Main Container (Now flex-col to stack items vertically) */}
            <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center z-10">

                {/* =========================================
            PART 1: THE SPOTLIGHT IMAGE 
            (Added mb-24 to push the shop section down)
        ========================================= */}
                <div className=" relative flex items-center justify-center motion-preset-slide-up motion-duration-1000 motion-delay-150 mt-10 mb-24 lg:mb-32">

                    {/* Layer 1: "Vitalité" */}
                    <h1 className="absolute top-0 left-0 -translate-x-[20%] -translate-y-[40%] sm:-translate-x-[30%] sm:-translate-y-[50%] font-extrabold font-serif leading-none
                          text-[12vw] sm:text-[85px] md:text-[100px] lg:text-[115px] xl:text-[130px]
                          text-pink-900/90 [text-shadow:_0_10px_30px_rgba(131,24,67,0.4)] 
                          z-0 pointer-events-none">
                        Vitalité
                    </h1>

                    {/* Layer 1.5: The Ampersand */}
                    <span className="absolute top-1/2 left-0 -translate-x-[80%] -translate-y-1/2 font-serif italic leading-none
                           text-[100px] sm:text-[150px] md:text-[200px] lg:text-[250px]
                           text-emerald-950/10 z-0 pointer-events-none">
                        &
                    </span>

                    {/* Layer 2: The Product Image */}
                    <img
                        src="/product4.png"
                        alt="Rosel Paris Tea Canister"
                        className="relative z-10 w-full max-w-[250px] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg h-auto max-h-[55vh] lg:max-h-[65vh] object-contain drop-shadow-2xl"
                    />

                    {/* Layer 3: "Silhouette" */}
                    <h1 className="absolute bottom-0 right-0 translate-x-[20%] translate-y-[30%] sm:translate-x-[30%] sm:translate-y-[40%] font-extrabold font-serif leading-none
                          text-[14vw] sm:text-[90px] md:text-[100px] lg:text-[120px] xl:text-[140px]
                          text-emerald-950 [-webkit-text-stroke:1.5px_#d4af37] 
                          z-20 pointer-events-none">
                        Silhouette
                    </h1>
                </div>

                <img
                    src="/emblem.png"
                    alt=""
                    className=" relative top-0 pb-5 md:pb-10 lg:pb-15 w-[80%] max-w-[200px] md:max-w-[250px] h-auto object-contain z-20 opacity-80"
                />
                {/* The Luxury Catalog Layout (Grid Fixes Spacing & Heights) */}
                <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-stretch">

                    {/* --- LEFT: The Square Card --- */}
                    <div className="w-full aspect-square">
                        <ImgCard
                            img="/product_5.png"
                            title="Thé infusion Cassis Hibiscus"
                            className="w-full h-full flex flex-col"
                            onSelect={() => {


                                addToCart(productInfo['HibiscusCassis']);

                                toggleDrawer(true);
                            }}
                        >
                            {/* Button Container */}
                            <div className="mt-auto pt-4 w-full">
                                <Button
                                    variant="contained"
                                    disableElevation
                                    onClick={(e) => {
                                        e.stopPropagation();

                                        addToCart(productInfo['HibiscusCassis']);

                                        toggleDrawer(true);
                                    }}
                                    sx={{
                                        width: '100%',
                                        backgroundColor: '#022c22', // Emerald-950
                                        color: '#fef3c7',
                                        borderRadius: '4px',
                                        padding: '14px 20px',
                                        textTransform: 'none',
                                        fontFamily: 'sans-serif',
                                        fontStyle: 'normal',
                                        fontSize: '1.25rem',
                                        fontWeight: 600,
                                        letterSpacing: '0.02em',
                                        transition: 'all 0.3s ease',
                                        border: '1px solid #022c22',
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                            color: '#022c22',
                                        }
                                    }}
                                >
                                    Ajouter au panier — 25 €
                                </Button>
                            </div>
                        </ImgCard>
                    </div>

                    {/* --- RIGHT: Seamless Text Frame --- */}
                    {/* Grid automatically stretches this div to match the height of the image on the left! */}
                    {/* Removed bg-white, border, and shadow. Added light padding for mobile. */}
                    <div className="w-full h-full flex flex-col justify-center px-4 md:px-0 py-6 md:py-0">

                        {/* Sleek Subtitle/Category above the main title */}
                        <span className=" italic text-sm font-semibold tracking-widest uppercase text-emerald-700/80 mb-2">
                            Signature
                        </span>

                        <h3 className="text-3xl lg:text-4xl font-serif text-emerald-950 font-bold mb-6">
                            Infusion Cassis & Hibiscus
                        </h3>

                        <p className="text-emerald-950/80 text-lg lg:text-xl leading-relaxed mb-8">
                            Une infusion audacieuse qui marie la puissance du cassis à l'acidulé rafraîchissant de l'hibiscus. Créée pour stimuler votre vitalité, cette synergie accompagne parfaitement vos séances de madérothérapie pour prolonger les effets détoxifiants.
                        </p>

                        {/* Minimalist Details without the bright orange stars */}
                        <ul className="space-y-4 text-emerald-950 font-medium mt-auto">
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-700/60 font-serif text-xl leading-none pt-1">✦</span>
                                Action drainante & antioxydante
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-700/60 font-serif text-xl leading-none pt-1">✦</span>
                                Ingrédients 100% naturels
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-700/60 font-serif text-xl leading-none pt-1">✦</span>
                                Sachet kraft refermable de 100g
                            </li>
                        </ul>
                    </div>


                    {/* --- LEFT: The Square Card --- */}
                    <div className="w-full aspect-square">
                        <ImgCard
                            img="/product_5.png"
                            title="Thé infusion Cassis Hibiscus"
                            className="w-full h-full flex flex-col"
                            onSelect={() => {


                                addToCart(productInfo['HibiscusCassis']);

                                toggleDrawer(true);
                            }}
                        >
                            {/* Button Container */}
                            <div className="mt-auto pt-4 w-full">
                                <Button
                                    variant="contained"
                                    disableElevation
                                    onClick={(e) => {
                                        e.stopPropagation();

                                        addToCart(productInfo['HibiscusCassis']);

                                        toggleDrawer(true);
                                    }}
                                    sx={{
                                        width: '100%',
                                        backgroundColor: '#022c22', // Emerald-950
                                        color: '#fef3c7',
                                        borderRadius: '4px',
                                        padding: '14px 20px',
                                        textTransform: 'none',
                                        fontFamily: 'sans-serif',
                                        fontStyle: 'normal',
                                        fontSize: '1.25rem',
                                        fontWeight: 600,
                                        letterSpacing: '0.02em',
                                        transition: 'all 0.3s ease',
                                        border: '1px solid #022c22',
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                            color: '#022c22',
                                        }
                                    }}
                                >
                                    Ajouter au panier — 25 €
                                </Button>
                            </div>
                        </ImgCard>
                    </div>

                    {/* --- RIGHT: Seamless Text Frame --- */}
                    {/* Grid automatically stretches this div to match the height of the image on the left! */}
                    {/* Removed bg-white, border, and shadow. Added light padding for mobile. */}
                    <div className="w-full h-full flex flex-col justify-center px-4 md:px-0 md:py-0">

                        {/* Sleek Subtitle/Category above the main title */}
                        <span className=" italic text-sm font-semibold tracking-widest uppercase text-emerald-700/80 mb-2">
                            Signature
                        </span>

                        <h3 className="text-3xl lg:text-4xl font-serif text-emerald-950 font-bold mb-6">
                            Infusion Cassis & Hibiscus
                        </h3>

                        <p className="text-emerald-950/80 text-lg lg:text-xl leading-relaxed mb-8">
                            Une infusion audacieuse qui marie la puissance du cassis à l'acidulé rafraîchissant de l'hibiscus. Créée pour stimuler votre vitalité, cette synergie accompagne parfaitement vos séances de madérothérapie pour prolonger les effets détoxifiants.
                        </p>

                        {/* Minimalist Details without the bright orange stars */}
                        <ul className="space-y-4 text-emerald-950 font-medium mt-auto">
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-700/60 font-serif text-xl leading-none pt-1">✦</span>
                                Action drainante & antioxydante
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-700/60 font-serif text-xl leading-none pt-1">✦</span>
                                Ingrédients 100% naturels
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-700/60 font-serif text-xl leading-none pt-1">✦</span>
                                Sachet kraft refermable de 100g
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}