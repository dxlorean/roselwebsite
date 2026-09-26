import { HandHeart, Activity, Scale, Sparkles, Droplets, Hand } from 'lucide-react';
import ScrollList from "@/components/lightswind/scroll-list";
import { ShinyButton } from "@/components/ui/shiny-button";
import ImgCard from "../components/ImgCard";
import { BienfaitsList } from './Bienfaits';
import { PaypalLogoIcon } from "@phosphor-icons/react";
export default function Soins({ toggleDrawer }) {
    return (
        <section className="relative px-6 lg:px-8  bg-amber-50  flex   pt-6 sm:pt-6 md:pt-8    items-center  overflow-hidden">


            <img
                src="/emblem.png"
                alt=""
                className=" absolute top-3 left-1/2 -translate-x-1/2 w-[80%] max-w-[200px] md:max-w-[250px] h-auto object-contain z-20 opacity-80"
            />



            <div className="relative w-full max-w-7xl mx-auto flex flex-col z-10 px-5 pt-14 pb-5 md:pb-10  lg:px-8">
                <div id="treatments" className='scroll-mt-[110px]' >
                    <h1 className='motion-preset-slide-up motion-duration-2000 motion-delay-300 text-3xl sm:text-2xl md:text-4xl lg:text-5xl text-red-800/90  
                                  z-0 pointer-events-none [-webkit-text-stroke:0.4px_#d4af37]  leading-relaxed max-w-5xl mx-auto font-bold text-center font-serif'>
                        Particuliers
                    </h1>
                </div>

                <div>
                    <p className=" text-sm*2 md:text-xl  text-emerald-950/80 leading-relaxed max-w-2xl mx-auto text-center font-serif">

                        Accordez-vous une parenthèse de douceur et de vitalité grâce à nos soins ciblés pour le corps et l'esprit.
                        {" "}
                        <span className="italic bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent font-bold ">

                        </span>{" "}


                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 ">
                    <ImgCard
                        onSelect={toggleDrawer(true, 2, false, 'massage')} img="/massage.png" title="Massage Relaxation (30 min) — 60 €">Détente profonde, relâchement musculaire et réduction immédiate du stress. Une véritable bulle de lâcher-prise pour relâcher les tensions du quotidien.</ImgCard>
                    <ImgCard onSelect={toggleDrawer(true, 2, false, 'drainage')}
                        img="/traitement_drainage.png" title="Drainage Lymphatique (45 min) — 100 €">Le soin idéal pour retrouver des jambes légères. Cette technique douce stimule la circulation et réduit efficacement la rétention d'eau.</ImgCard>
                    <ImgCard onSelect={toggleDrawer(true, 2, false, 'madero')} img="/maderotherapy.png" title="Madérothérapie (45 min) — 100 €">Une technique sculptante et naturelle pour le remodelage de la silhouette et la tonicité de la peau, tout en vous procurant un bien-être global.</ImgCard>


                </div>

               
                <div className="grid grid-cols-1 pb-10 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full px-4 items-start">

                    {/* CARD 1: Forfait Bien-Être */}
                    <div className="relative mt-8 max-w-[400px] w-full mx-auto p-[3px] rounded-[18px] bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300  transition-transform hover:-translate-y-1">

                      

                        {/* Removed flex-1 so it wraps tightly around the ImgCard */}
                        <div className="rounded-[15px] overflow-hidden bg-white">
                            <ImgCard
                                title="Forfait Bien-Être — 600 €"
                                onSelect={toggleDrawer(true, 2, false, 'forfait')}
                            >
                                Cure complète de <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent font-bold ">
                                    5 séances au choix
                                </span>{" "}
                                (Drainage lymphatique <span className='font-bold'>OU</span> Madérothérapie). Un accompagnement idéal pour des résultats durables sur votre silhouette et un bien-être profond.
                            </ImgCard>
                        </div>
                    </div>

                    {/* CARD 2: Abonnements (Red Gradient) */}
                    <div className="relative mt-8 max-w-[400px] w-full mx-auto p-[3px] rounded-[18px] bg-gradient-to-r from-red-300 via-red-500 to-red-300 transition-transform hover:-translate-y-1">

                      

                        {/* Removed flex-1 so it wraps tightly around the ImgCard */}
                        <div className="rounded-[15px] overflow-hidden bg-white">
                            <ImgCard
                                title="Abonnements"
                                onSelect={toggleDrawer(true, 2, true, 'abo')}
                            >
                                Abonnements annuels <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent font-bold drop-shadow-sm">
                                    sur-mesure
                                </span>{" "}
                                (Interventions régulières <span className="font-bold">OU</span> soins à la carte). Un accompagnement idéal pour garantir un bien-être continu tout au long de l'année, adapté à vos besoins spécifiques. <br /><br /><span className="font-bold text-gray-800">Tarif sur devis.</span>
                            </ImgCard>
                        </div>
                    </div>

                </div>
                <div className='border-amber-300 gap-5 rounded-md flex flex-row justify-center h-20 w-full '>
                    <div className="h-full aspect-square 0 p-3">
                        <PaypalLogoIcon  className="w-full text-blue-600 h-full" />
                    </div>
                     <img src="/visa.svg" className="h-full aspect-square 0 p-3">
                       
                    </img>
                       <img src="/mastercard.webp" className="h-full  0 p-3">
                       
                    </img>
                       <img src="/CB.jpg" className="h-full  0 p-3">
                       
                    </img>
                </div>
            </div>



        </section>
    );
}