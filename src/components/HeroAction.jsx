import { motion } from "motion/react";
// Assurez-vous d'importer votre composant ShinyButton ici
import { ShinyButton } from "@/components/ui/shiny-button"

export const HeroActionBlock = () => {
    return (
        <div className="w-full flex flex-col items-center mt-8 z-20 relative">
            
            {/* Credibility Badges */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                className="flex flex-wrap justify-center items-center gap-3 md:gap-6 mb-8 px-4 font-serif"
            >
                {/* Badge 1 */}
                <div className="flex items-center gap-2 px-5 py-2 md:py-2.5 bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-full shadow-sm text-emerald-950 text-xs md:text-sm font-medium tracking-wide">
                    <span className="text-amber-500 text-[10px]">✦</span>
                    Préparatrice en Pharmacie
                </div>
                
                {/* Badge 2 */}
                <div className="flex items-center gap-2 px-5 py-2 md:py-2.5 bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-full shadow-sm text-emerald-950 text-xs md:text-sm font-medium tracking-wide">
                    <span className="text-amber-500 text-[10px]">✦</span>
                    Animatrice BAFA
                </div>
                
                {/* Badge 3 */}
                <div className="flex items-center gap-2 px-5 py-2 md:py-2.5 bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-full shadow-sm text-emerald-950 text-xs md:text-sm font-medium tracking-wide">
                    <span className="text-amber-500 text-[10px]">✦</span>
                    Experte Maderothérapie & Drainage
                </div>
            </motion.div>

            {/* Call To Action Buttons */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                className="flex flex-col sm:flex-row justify-center items-center gap-4 pb-4 md:py-5 lg:py-6 w-full px-4"
            >
                
            </motion.div>

        </div>
    );
};