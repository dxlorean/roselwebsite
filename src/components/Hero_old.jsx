export default function Hero() {
    const hibiscusImageUrl = "/hibiscus-flower.png";

    return (
        <section className="relative min-h-[75vh] md:min-h-[85vh] lg:min-h-screen bg-amber-50 flex items-center justify-center pt-35 pb-10 md:pb-10 md:pt-35   px-6 lg:px-8 overflow-hidden">
            
            {/* 1. The Main Full-Width Container */}
            <div className="relative w-full max-w-7xl mx-auto flex items-center justify-center">

                {/* 👇 THE FIX: The Tight Wrapper 👇 
                    This div's size is strictly dictated by the image inside it. 
                    Because it is "relative", the absolute text elements inside will now anchor to the IMAGE corners, not the screen corners. 
                */}
               {/* 👇 THE TIGHT WRAPPER 👇 */}
                <div className="relative flex items-center justify-center motion-preset-slide-up motion-duration-1000 motion-delay-150">
                    
                    {/* Layer 1: "Vitalité" (Top Left of the Image) */}
                    <h1 className="absolute top-0 left-0 -translate-x-[20%] -translate-y-[40%] sm:-translate-x-[30%] sm:-translate-y-[50%] font-extrabold font-serif leading-none
                                  text-[12vw] sm:text-[85px] md:text-[100px] lg:text-[115px] xl:text-[130px]
                                  text-pink-900/90 [text-shadow:_0_10px_30px_rgba(131,24,67,0.4)] 
                                  z-0 pointer-events-none">
                        Vitalité
                    </h1>

                    {/* Layer 1.5: The Ampersand (Pinned to the left edge of the image) */}
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

                    {/* Layer 3: "Silhouette" (Bottom Right of the Image) */}
                    <h1 className="absolute bottom-0 right-0 translate-x-[20%] translate-y-[30%] sm:translate-x-[30%] sm:translate-y-[40%] font-extrabold font-serif leading-none
                                  text-[14vw] sm:text-[90px] md:text-[100px] lg:text-[120px] xl:text-[140px]
                                  text-emerald-950 [-webkit-text-stroke:1.5px_#d4af37] 
                                  z-20 pointer-events-none">
                        Silhouette
                    </h1>

                </div>

                {/* Layer 4: Floating Hibiscus Elements 
                    (Notice these are outside the tight wrapper so they float across the whole screen) */}
                <img src={hibiscusImageUrl} className="absolute top-10 right-10 lg:right-20 w-20 sm:w-28 h-auto opacity-80 z-5 motion-preset-drift motion-duration-[12s] motion-loop-infinite" />
                <img src={hibiscusImageUrl} className="absolute top-1/2 left-0 w-12 sm:w-16 h-auto opacity-60 z-5 motion-preset-drift-reverse motion-duration-[15s] motion-loop-infinite" />
                <img src={hibiscusImageUrl} className="absolute bottom-5 lg:bottom-10 left-10 w-32 sm:w-48 h-auto opacity-90 z-25 motion-preset-revolve motion-duration-[20s] motion-loop-infinite" />

            </div>
            
        </section>
    );
}