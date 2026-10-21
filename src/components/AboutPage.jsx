import ImgCard from "../components/ImgCard";
import { ShinyButton } from "@/components/ui/shiny-button"
import { HeroActionBlock } from "./HeroAction";

import Button from "@mui/material/Button";
import { CalendarIcon, DeleteIcon, SendIcon } from "lucide-react";

export default function AboutSection() {
    return (
        <>
            <div className="fixed top-0 w-full h- overflow-clip">
                <img
                    className="w-full h-full  object-cover"
                    src="/realimg1.jpeg"
                    alt="Background"
                />
            </div>
            <section id="about" className="relative px-6 lg:px-8   pt-30  md:pt-32  overflow-hidden ">

                {/* Main Container with a large vertical gap between the "story blocks" */}
                <div className="relative  w-full pt-10 max-w-7xl mx-auto bg-amber-50 backdrop-blur-xl p-10 rounded-lg flex flex-col  z-10">


                    <div className="flex flex-col gap-3 items-center">


                        {/* Fixed the h1/h2 nesting issue! */}
                        <h2 className="text-3xl   sm:text-4xl md:text-5xl lg:text-5xl text-red-800/90 
                                     [-webkit-text-stroke:0.4px_#d4af37] leading-tight font-bold font-serif mb-4">
                            L'alliance de l'expertise santé et du bien-être
                        </h2>

                        <p className="text-lg  md:text-xl text-emerald-950/80 leading-relaxed h-dvh font-serif">
                            <span className="italic font-medium">Rosel Paris</span> est née d'une
                            conviction simple : le bien-être physique et mental nécessite un accompagnement rigoureux,
                            régulier et adapté au rythme de chacun. Notre mission est d'accompagner les particuliers,
                            les seniors et les professionnels dans une démarche globale
                            de vitalité et d'amélioration continue de la qualité de vie. <br></br> <br></br>
                            Spécialisé dans les techniques manuelles ciblées — telles que le drainage lymphatique,
                            la madérothérapie et les massages profonds —
                            notre institut privilégie des méthodes aux résultats physiologiques concrets.
                            Notre approche ne se limite pas à une détente ponctuelle ; elle vise un soulagement réel des tensions, la relance du métabolisme et un entretien durable du corps.
                            <br></br><br></br>
                            Parce que chaque besoin est unique, notre accompagnement a été pensé pour être totalement flexible. Nous proposons des soins à la carte, des cures intensives pour des résultats profonds (forfaits), ainsi que des abonnements annuels sur-mesure. Cette adaptabilité nous permet d'intervenir avec la même exigence de discrétion et
                            de professionnalisme auprès de notre clientèle privée, qu'au sein d'entreprises ou d'établissements spécialisés.
                        </p>

                        

                    </div>




                </div>


                {/* =========================================
                    BLOCK 2: The Double Competence (Image Left, Text Right)
                ========================================= */}
                {/**    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    
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

                   
                    <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                        <img
                            src="/logo8.png"
                            alt="Rosel Paris"
                            className="w-full max-w-[350px] md:max-w-[450px] lg:max-w-[550px] h-auto object-contain z-20 drop-shadow-xl"
                        />
                    </div>
                </div> */}


            </section>
        </>

    );
}