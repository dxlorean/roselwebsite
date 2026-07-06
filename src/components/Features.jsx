

import { ShinyButton } from "@/components/ui/shiny-button"
import { Link } from "react-router-dom";
export default function Features() {

  

  

    return (
        <section className="relative px-6 lg:px-8 bg-amber-100 flex   pt-3 md:pt-7  items-center  overflow-hidden">

            {/* The Top Separator Emblem */}
            <img
                src="/emblem.png"
                alt=""
                className="absolute top-6 left-1/2 -translate-x-1/2 w-[80%] max-w-[200px] md:max-w-[250px] h-auto object-contain z-20 opacity-80"
            />



            <div  className="relative w-full max-w-7xl mx-auto flex flex-col z-10 px-5 pt-10 sm:pt-8 sm:px-6 lg:px-8 border-red-300">

                

                <div id="shop"  className='scroll-mt-[80px] text-center flex flex-col items-center pt-7 pb-7 md:pt-10  lg:pt-15 lg:pb-15 '>
                    <h1 className='motion-preset-slide-up motion-duration-2000 motion-delay-300 text-3xl sm:text-2xl md:text-4xl lg:text-5xl text-red-800/90 [text-shadow:_0_10px_30px_rgba(131,24,67,0.4)] 
                                  z-0 pointer-events-none [-webkit-text-stroke:0.4px_#d4af37]  leading-relaxed max-w-3xl mx-auto font-bold text-center font-serif'>
                        La Boutique
                    </h1>
                </div>
                <div  className=' text-center flex flex-col items-center  pb-7  md:pb-5  lg:pb-8 '>
                    <img
                        src="/product_trio2.png"
                        alt=""
                        className="transition-transform duration-500 ease-in-out hover:scale-102 max-w-[350px] md:max-w-[450px] lg:max-w-[550px] h-auto object-contain z-20"
                    />
                    
                </div>
                <p className=" text-sm*2 md:text-2xl  text-emerald-950/80 leading-relaxed max-w-4xl mx-auto text-center font-serif">
                    Découvrez nos mélanges de thés aux saveurs exquises. Une synergie {" "}
                    <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent font-bold drop-shadow-sm">
                        100% naturelle
                    </span>{" "}
                     pensée pour votre hydratation, votre vitalité, 
                    votre équilibre intérieur et votre drainage lymphatique.
                    
                   
                </p>
                <div className='pt-4 pb-4 md:pt-5 md:pb-5 lg:pt-6 lg:pb-6 text-center flex flex-col items-center'>
                    <Link to="/shop#shop">
                    <ShinyButton className="">Decouvrir</ShinyButton>
                    </Link>
                </div>
              

            </div>

        </section>
    );
}