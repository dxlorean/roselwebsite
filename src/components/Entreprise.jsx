import { HandHeart, Activity, Scale, Sparkles, Droplets, Hand } from 'lucide-react';
import ScrollList from "@/components/lightswind/scroll-list";
import { ShinyButton } from "@/components/ui/shiny-button";
import { BienfaitsList } from './Bienfaits';
import ActivityCard from './ImgCard2';
import { Diamond } from "lucide-react";
import { DrawCircleText } from "../components/DrawCircleText"
export default function Soins({toggleDrawer}) {
    return (
        <section className="relative px-6 lg:px-8 bg-amber-100 flex   pt-3 pb-0 md:pt-5 md:pb-5  items-center  overflow-hidden">

            {/* The Top Separator Emblem */}
            <img
                src="/emblem.png"
                alt=""
                className=" absolute top-3 left-1/2 -translate-x-1/2 w-[80%] max-w-[200px] md:max-w-[250px] h-auto object-contain z-20 opacity-80"
            />



            <div className="relative w-full max-w-7xl mx-auto flex flex-col z-10 px-5 pt-14   lg:px-8">
                <div id="offers" className='scroll-mt-[110px]' >
                    <h1 className='motion-preset-slide-up motion-duration-2000 motion-delay-300 text-3xl sm:text-2xl md:text-4xl lg:text-5xl text-red-800/90  
                                  z-0 pointer-events-none [-webkit-text-stroke:0.4px_#d4af37]  leading-relaxed max-w-5xl mx-auto font-bold text-center font-serif'>
                        Entreprises & CSE
                    </h1>
                </div>

                <div>
                    <p className=" text-sm*2 md:text-xl  text-emerald-950/80 leading-relaxed max-w-2xl mx-auto text-center font-serif">

                        Investissez dans la Qualité de Vie au Travail  et offrez à vos collaborateurs des moments de déconnexion, de cohésion et de prévention santé.
                        {" "}
                        <span className="italic bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent font-bold drop-shadow-sm">

                        </span>{" "}


                    </p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">

                    <ActivityCard
                        title="Journées Bien-Être"
                        img="/journees.png"
                        description="Créez l'événement au sein de vos locaux :"
                        onSelect={toggleDrawer(true, 2, true, 'cse')}
                        activities={[
                            "Massage bien-être assis",
                            "Massage relaxation",
                            "Ateliers gestion du stress",
                            "Espaces détente",
                            "Infusions bien-être"
                        ]}
                    />

                    <ActivityCard
                        title="Ateliers QVCT"
                        img="/aterliers.png"
                        description="Sensibiliser et outiller vos équipes :"
                        onSelect={toggleDrawer(true, 2, true, 'cse')}
                        activities={[
                            "Gestion du stress",
                            "Prévention fatigue",
                            "Hydratation et récupération",
                            "Bien-être au travail"
                        ]}
                    />

                    <ActivityCard
                        title="Animations CSE"
                        img="/cse.png"
                        description="Dynamisez la vie de votre entreprise :"
                        onSelect={toggleDrawer(true, 2, true, 'cse')}
                        activities={[
                            "Semaines QVCT",
                            "Ateliers détente",
                            "Journées thématiques",
                            "Découverte des infusions naturelles"
                        ]}
                    />

                </div>


            </div>



        </section>
    );
}