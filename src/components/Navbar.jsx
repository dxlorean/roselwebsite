
import { useState, useContext } from "react";
import DrawOutlineButton from "./OutlineButton";
import ParisHover from "./ParisHover"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils";
import { NavLink, Link } from "react-router-dom";
import { CartContext } from './CartContext';

export default function Navbar({ toggleCart }) {
    const [mobileMenuIsOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)
    const hasItems = cartItems.length > 0;
    return (


        <nav className=" fixed top-0 w-full z-50 transition-all duration-300 bg-amber-50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-1 py-5 sm:px-3 sm:py-3 lg:px-5">
                <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
                    <div className="flex items-center space-x-5 group cursor-pointer">
                        <div>
                            <img href="/home" src='/logo5.png' alt="Rosel" className="w-20 h-20" />
                        </div>
                        <div>
                            <NavLink to="/home#home" className="text-lg sm:text-xl md:text-2xl font-serif leading-none font-bold"> Rosel</NavLink>
                        </div>
                    </div>
                    {/* Nav links*/}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        <Link to="/shop#shop" onClick={() => {
                            setTimeout(() => {
                                const element = document.getElementById("shop");
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                                }
                            }, 300);
                        }} className="">
                            <DrawOutlineButton  >La Collection</DrawOutlineButton>
                        </Link>
                        <Link to="/home#treatments" onClick={() => {
                            setTimeout(() => {
                                const element = document.getElementById("treatments");
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                                }
                            }, 300);
                        }} className="">
                            <DrawOutlineButton>Nos Soins</DrawOutlineButton>
                        </Link>
                        <Link to="/home#offers" onClick={() => {
                            setTimeout(() => {
                                const element = document.getElementById("offers");
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                                }
                            }, 300);
                        }} className="">
                            <DrawOutlineButton>Offre Établissements</DrawOutlineButton>
                        </Link>
                        <Link to="/home#contact" onClick={() => {
                            setTimeout(() => {
                                const element = document.getElementById("contact");
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                                }
                            }, 300);
                        }} className="">
                            <DrawOutlineButton>Contact</DrawOutlineButton>
                        </Link>
                        <NavLink to="/about#about" onClick={() => {
                            setTimeout(() => {
                                const element = document.getElementById("about");
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                                }
                            }, 300);
                        }} >
                            <DrawOutlineButton>A Propos</DrawOutlineButton>
                        </NavLink>
                        <Link to="/shop#shop" onClick={() => {
                            setTimeout(() => {
                                const element = document.getElementById("shop");
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                                }
                            }, 300);
                        }} className="">
                            <DrawOutlineButton onClick={() => { toggleCart(true) }}>

                               
                                <div className="relative flex items-center justify-center">

                                   
                                    <img
                                        src='/shopping-cart.svg'
                                        alt="Cart"
                                       
                                        className={`w-6 h-6 sm:w-8 sm:h-8 transition-all ${hasItems ? 'animate-pulse' : ''}`}
                                    />

                                    
                                    {hasItems && (
                                        <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
                                           
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>

                                    
                                            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-600 border-2 border-white"></span>
                                        </span>
                                    )}

                                </div>

                            </DrawOutlineButton>
                        </Link>
                    </div>
                    <button className="md:hidden p-2"
                        onClick={() => setMobileMenuOpen((prev) => !prev)}>

                        {mobileMenuIsOpen ? (
                            <X className="w-6 h-6 sm:w-8 sm:h-8" />
                        ) : (
                            <Menu className="w-6 h-6 sm:w-8 sm:h-8" />
                        )

                        }
                    </button>
                </div>
            </div>
            {mobileMenuIsOpen &&
                <div className="md:hidden backdrop-blur-lg bg-amber-50 motion-preset-slide-down">
                    <div className="px-10  sm:px-15  lg:px-20  py-4 sm:py-6 space-y-3 sm:space-y-4">
                        <NavLink to="/shop#shop" onClick={() => {
                            setMobileMenuOpen(false)

                            setTimeout(() => {
                                const element = document.getElementById("shop");
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                                }
                            }, 300);

                        }

                        } className="block">
                            <DrawOutlineButton  >La Collection</DrawOutlineButton>
                        </NavLink>
                        <NavLink to="/home#treatments" onClick={() => {
                            setMobileMenuOpen(false)

                            setTimeout(() => {
                                const element = document.getElementById("treatments");
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                                }
                            }, 300);

                        }

                        } className="block">
                            <DrawOutlineButton>Nos Soins</DrawOutlineButton>
                        </NavLink>
                        <NavLink to="home/#offers" onClick={() => {
                            setMobileMenuOpen(false);
                            setTimeout(() => {
                                const element = document.getElementById("offers");
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                                }
                            }, 300);
                        }} className="block">
                            <DrawOutlineButton>Offre Établissements</DrawOutlineButton>
                        </NavLink>
                        <NavLink to="/home#contact" onClick={() => {
                            setMobileMenuOpen(false);
                            setTimeout(() => {
                                const element = document.getElementById("contact");
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                                }
                            }, 300);
                        }} className="block">
                            <DrawOutlineButton>Contact</DrawOutlineButton>
                        </NavLink>
                        <NavLink to="/about#about" onClick={() => {
                            setMobileMenuOpen(false);
                            setTimeout(() => {
                                const element = document.getElementById("about");
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                                }
                            }, 300);
                        }} className="block">
                            <DrawOutlineButton>A Propos</DrawOutlineButton>
                        </NavLink>
                        <Link to="/shop#shop" onClick={() => {
                            setMobileMenuOpen(false);
                            setTimeout(() => {
                                const element = document.getElementById("shop");
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                                }
                                toggleCart(true);
                            }, 300);
                        }}
                            className="block motion-preset-bounce">
                            <DrawOutlineButton onClick={() => { toggleCart(true) }}>

                               
                                <div className="relative flex items-center justify-center">

                                   
                                    <img
                                        src='/shopping-cart.svg'
                                        alt="Cart"
                                       
                                        className={`w-6 h-6 sm:w-8 sm:h-8 transition-all ${hasItems ? 'animate-pulse' : ''}`}
                                    />

                                    
                                    {hasItems && (
                                        <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
                                           
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>

                                    
                                            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-600 border-2 border-white"></span>
                                        </span>
                                    )}

                                </div>

                            </DrawOutlineButton>
                        </Link>
                    </div>

                </div>}
        </nav>
    );
}