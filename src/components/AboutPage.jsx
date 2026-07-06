import ImgCard from "../components/ImgCard";
import { ShinyButton } from "@/components/ui/shiny-button"
import { HeroActionBlock } from "./HeroAction";

import Button from "@mui/material/Button";
import { CalendarIcon, DeleteIcon, SendIcon } from "lucide-react";

export default function AboutSection() {
    return (
      
        <section id="about" className="relative px-6 lg:px-8 bg-amber-50 pt-30 pb-16 md:pt-32 md:pb-24 overflow-hidden scroll-mt-[110px]">
            
            {/* Main Container with a large vertical gap between the "story blocks" */}
            <div className="relative w-full max-w-7xl mx-auto flex flex-col space-y-20 md:space-y-32 z-10">

                {/* =========================================
                    BLOCK 1: Title + Intro (Text Left, Image Right)
                ========================================= */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="flex flex-col text-left space-y-6 order-2 lg:order-1">
                        
                        {/* Fixed the h1/h2 nesting issue! */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-red-800/90 [text-shadow:_0_10px_30px_rgba(131,24,67,0.4)] 
                                     [-webkit-text-stroke:0.4px_#d4af37] leading-tight font-bold font-serif mb-4">
                            L'alliance de l'expertise santé et du bien-être
                        </h2>

                        <p className="text-lg md:text-xl text-emerald-950/80 leading-relaxed font-serif">
                            <span className="italic font-medium">Rosel Paris</span> est née d'une volonté d'accompagner chaque personne — particuliers, seniors, et professionnels — dans une démarche globale de mieux-être, de vitalité et d'amélioration de la qualité de vie.
                        </p>
                    </div>

                    {/* Placeholder Image 1 */}
                    <div className="flex justify-center order-1 lg:order-2">
                        <div className="w-full max-w-[500px] aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                            <img
                                src="/logo8.png" // 👈 Add a photo of Rosel talking with a client here
                                alt="Rosel"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* =========================================
                    BLOCK 2: The Double Competence (Image Left, Text Right)
                ========================================= */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* Placeholder Image 2 (Visually on the left on desktop) */}
                    <div className="flex justify-center order-1">
                        <div className="w-full max-w-[500px] aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                            <img
                                src="/placeholder_client_2.jpg" // 👈 Add a photo of Rosel performing a treatment here
                                alt="Soin de maderothérapie par Rosel"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col text-left space-y-6 order-2">
                        <p className="text-lg md:text-xl text-emerald-950/80 leading-relaxed font-serif">
                            Forte d'une double compétence unique, Rosel associe la rigueur scientifique et médicale de son métier de{" "}
                            <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent font-bold drop-shadow-sm">
                                Préparatrice en Pharmacie
                            </span>{" "}
                            à la précision technique et manuelle de son rôle d'{" "}
                            <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent font-bold drop-shadow-sm">
                                Experte en Madérothérapie & Drainage
                            </span>.
                        </p>
                    </div>
                </div>

              
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="flex flex-col text-left space-y-6 order-2 lg:order-1">
                        <p className="text-lg md:text-xl text-emerald-950/80 leading-relaxed font-serif">
                            Cette approche holistique permet de concevoir des soins sur-mesure qui vont bien au-delà de l'esthétique. Qu'il s'agisse de soulager des douleurs circulatoires, de sculpter la silhouette, de relancer le métabolisme, ou d'apporter un moment d'apaisement par le biais d'ateliers en institution, Rosel place l'humain, l'écoute et la prévention au cœur de chaque séance.
                        </p>
                    </div>

                    {/* Original Logo Image */}
                    <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                        <img
                            src="/logo8.png"
                            alt="Rosel Paris"
                            className="w-full max-w-[350px] md:max-w-[450px] lg:max-w-[550px] h-auto object-contain z-20 drop-shadow-xl"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}