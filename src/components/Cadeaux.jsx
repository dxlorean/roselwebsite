import { ShinyButton } from "@/components/ui/shiny-button"
import { Diamond } from "lucide-react";
import { DrawCircleText } from "../components/DrawCircleText"
import { motion } from "motion/react";
export default function Cadeaux() {
    return (
        <section className="relative px-6 lg:px-8  bg-linear-to-t from-amber-100 via-amber-200/50 to-amber-100 flex   pt-3 pb-0 md:pt-5 md:pb-5  items-center  overflow-hidden">

            {/* The Top Separator Emblem */}
            <img
                src="/emblem.png"
                alt=""
                className=" absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-[200px] md:max-w-[250px] h-auto object-contain z-20 opacity-80"
            />



            <div className="relative  w-full max-w-5xl mx-auto flex flex-col z-8 px-5 pt-14 pb-20  lg:px-8">
                <div id="offers" className="scroll-mt-[110px]">
                    <h1 className="motion-preset-slide-up motion-duration-2000 motion-delay-300 relative w-fit mx-auto text-3xl sm:text-2xl md:text-4xl lg:text-5xl text-red-800/90 [text-shadow:_0_10px_30px_rgba(131,24,67,0.4)] z-0 pointer-events-none [-webkit-text-stroke:0.4px_#d4af37] leading-relaxed max-w-3xl font-bold text-center font-serif">
                        Offrez un moment de douceur
                    </h1>
                </div>



                <div className="absolute -z-2 px-0 pt-4 pb-12 md:pt-5 md:pb-5 lg:pt-8 lg:pb-8">
                    <motion.img
                        src="/coffret1.png"
                        alt="Coffret Cadeau Rosel"
                        // 1. The floating animation: moves up 12px, then back to 0
                        animate={{ y: [0, -12, 0] }}
                        transition={{
                            duration: 4, // 4 seconds makes it very slow and relaxing
                            repeat: Infinity, // Loops forever
                            ease: "easeInOut", // Smooth acceleration and deceleration
                        }}
                        // 2. The shiny outline: A custom golden drop-shadow glow
                        className="max-w-[130px] md:max-w-[180px] lg:max-w-[200px] h-auto object-contain z-20 drop-shadow-[0_0_20px_rgba(251,191,36,0.6)]"
                    />
                </div>
                <div className="pt-7 md:pt-12"></div>
                <p className="motion-preset-slide-up motion-duration-2000 motion-delay-300 text-lg md:text-xl text-emerald-950/80 leading-relaxed max-w-3xl mx-auto text-center font-serif">
                    <span className='italic'>Chez Rosel</span>, l'art du bien-être se cultive de l'intérieur pour mieux rayonner à l'extérieur. Notre collection botanique signature gorge votre corps d'une{" "}
                    <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent font-bold drop-shadow-sm">
                        hydratation
                    </span>{" "}
                    et d'une{" "}
                    <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent font-bold drop-shadow-sm">
                        vitalité
                    </span>{" "}
                    renouvelée à chaque gorgée. Pour prolonger cette harmonie, l'expérience Rosel s'invite directement chez vous ou au sein de votre établissement à travers des{" "}
                    <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent font-bold drop-shadow-sm">
                        soins sur-mesure
                    </span>.
                    Qu'il s'agisse d'une infusion réconfortante ou d'un massage d'exception, nous créons{" "}
                    une véritable parenthèse de douceur
                    pour apaiser le corps et libérer l'esprit.
                </p>

                
            </div>




        </section>
    );
}