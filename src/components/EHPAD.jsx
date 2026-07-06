import { HandHeart, Activity, Scale, Sparkles, Droplets, Hand } from 'lucide-react';
import ScrollList from "@/components/lightswind/scroll-list";
import { ShinyButton } from "@/components/ui/shiny-button";
import { BienfaitsList } from './Bienfaits';
import ActivityCard from './ImgCard2';
import ImgCard from "../components/ImgCard";
import { Diamond } from "lucide-react";
import { DrawCircleText } from "../components/DrawCircleText"
import Button from "@mui/material/Button";
import { CalendarIcon, DeleteIcon, SendIcon } from "lucide-react";
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
                <div id="treatments" className='scroll-mt-[110px]' >
                    <h1 className='motion-preset-slide-up motion-duration-2000 motion-delay-300 text-3xl sm:text-2xl md:text-4xl lg:text-5xl text-red-800/90 [text-shadow:_0_10px_30px_rgba(131,24,67,0.4)] 
                                  z-0 pointer-events-none [-webkit-text-stroke:0.4px_#d4af37]  leading-relaxed max-w-5xl mx-auto font-bold text-center font-serif'>
                        EHPAD & Residences Seniors
                    </h1>
                </div>

                <div>
                    <p className=" text-sm*2 md:text-xl  text-emerald-950/80 leading-relaxed max-w-2xl mx-auto text-center font-serif">

                        Offrez à vos résidents une véritable parenthèse de douceur. Nos interventions sont conçues pour apporter apaisement, réconfort et vitalité, dans le plus grand respect du rythme de chacun.
                        {" "}
                        <span className="italic bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent font-bold drop-shadow-sm">

                        </span>{" "}


                    </p>
                </div>


                <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 pt-4">

                    <ActivityCard
                        title="Ateliers Détente & Corps"
                        img="/ehpad1.png"
                        description="Stimuler le corps et l'esprit en douceur :"
                        activities={[
                            "Relaxation douce",
                            "Mobilisation bien-être",
                            "Drainage bien-être adapté"
                        ]}
                         onSelect={toggleDrawer(true, 2, true, 'ehpad')}
                    />

                    <ActivityCard
                        title="Partage & Convivialité"
                        img="/ehpad2.png"
                        description="Lier l'utile à l'agréable en groupe :"
                        activities={[
                            "Animations collectives",
                            "Hydratation et infusions",
                            "Instants d'échange bienveillants"
                        ]}
                        onSelect={toggleDrawer(true, 2, true, 'ehpad')}
                    />

                </div>
                <div className="relative mt-12 max-w-[450px] mx-auto p-[3px] rounded-[18px] bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 shadow-2xl shadow-amber-600/20 transition-transform hover:-translate-y-1">

                    {/* Badge Flottant "Avantage Réseau" */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-950 text-amber-400 font-bold tracking-widest uppercase text-xs px-5 py-1.5 rounded-full z-10 shadow-md flex items-center gap-2 whitespace-nowrap">
                        <Sparkles className="w-4 h-4" />
                        OFFRE PREMIUM
                    </div>

                    {/* Conteneur de la carte */}
                    <div className="rounded-[15px] overflow-hidden bg-white">
                        <ImgCard
                            img="/tarifs-degressifs.png"
                            title="Tarifs Dégressifs"
                             onSelect={toggleDrawer(true, 1, true)}
                        >
                            <div className="flex flex-col items-center text-center space-y-3 mt-2">
                                <span className="text-emerald-950 font-bold text-sm uppercase tracking-wider">
                                    Pour plusieurs établissements
                                </span>

                                <div className="text-xl font-bold text-emerald-950">
                                    Jusqu'à{" "}
                                    <span className="text-5xl font-black bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent drop-shadow-sm mx-1">
                                        20%
                                    </span>{" "}
                                    <br /> de remise
                                </div>

                                <span className="text-emerald-950/80 italic text-base pt-2 border-t border-stone-200/60 w-full">
                                    pour les interventions multi-sites.
                                </span>
                            </div>
                        </ImgCard>
                    </div>

                </div>
                <div className="pt-7 sm:pt-8 md:pt-11 lg:pt-16 motion-preset-slide-up motion-duration-2000 motion-delay-100 max-w-7xl mx-auto text-center font-serif space-y-8">





                    <div className="motion-preset-slide-up motion-duration-2000 motion-delay-300 max-w-5xl mx-auto font-serif space-y-8">


                        {/* Section Title */}
                        <DrawCircleText>
                            <h2 className="text-2xl md:text-3xl bg-gradient-to-r from-emerald-950/80 via-green-800 to-emerald-950/80 bg-clip-text text-transparent font-bold text-center">
                                Pourquoi Rosel ?
                            </h2>
                        </DrawCircleText>

                        {/* Value Propositions: Left Aligned with Custom Bullets */}
                        <ul className="space-y-6 max-w-5xl mx-auto">
                            {[
                                {
                                    title: "Expertise & Excellence Médicosociale",
                                    desc: "Des interventions sécurisées et de haute qualité, menées par une préparatrice en pharmacie certifiée pour garantir un accompagnement irréprochable."
                                },
                                {
                                    title: "Flexibilité & Prestations Sur-Mesure",
                                    desc: "Une approche 100% adaptable au rythme de votre établissement, aux contraintes de vos équipes et aux besoins spécifiques de chaque participant."
                                },
                                {
                                    title: "Qualité Premium & Service Clé en Main",
                                    desc: "Nous fournissons un matériel professionnel complet et gérons toute la logistique pour vous offrir une expérience fluide, sans aucune charge mentale."
                                }
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">


                                    <p className="text-lg text-emerald-950/80">
                                        <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent font-bold">
                                            {item.title}
                                        </span>{" "}<br></br>
                                        <span className="italic">{item.desc}</span>
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>


                </div>
                <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-5 mt-8 px-4">

                    {/* B2B Button : Devis (Outlined) */}
                    <Button
                        variant="outlined"
                        startIcon={<SendIcon />}
                        className="w-full sm:w-[320px]"
                         onClick={toggleDrawer(true, 1, true)}
                        sx={{
                            py: 1.5, // Padding vertical pour agrandir le bouton
                            fontSize: '1rem', // Texte plus grand (équivalent text-base)
                            fontWeight: 'bold',
                            textTransform: 'uppercase', // Majuscules pour l'élégance
                            letterSpacing: '0.05em',
                            color: '#022c22', // text-emerald-950
                            borderColor: '#022c22', // border-emerald-950
                            borderWidth: '2px',
                            '&:hover': {
                                borderWidth: '2px',
                                borderColor: '#d97706', // border-amber-600 au survol
                                color: '#d97706', // text-amber-600 au survol
                                backgroundColor: 'rgba(217, 119, 6, 0.04)', // Léger fond ambre
                            }
                        }}
                    >
                        Demander un devis
                    </Button>

                    {/* B2C Button : Rendez-vous (Contained) */}
                    <Button
                        variant="contained"
                        endIcon={<CalendarIcon />}
                        className="w-full sm:w-[320px]"
                         onClick={toggleDrawer(true, 1, false)}
                        sx={{
                            py: 1.5,
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            backgroundColor: '#022c22', // bg-emerald-950
                            color: '#ffffff',
                            boxShadow: '0 10px 15px -3px rgba(2, 44, 34, 0.3)', // shadow-lg émeraude
                            '&:hover': {
                                backgroundColor: '#d97706', // bg-amber-600 au survol
                                boxShadow: '0 10px 15px -3px rgba(217, 119, 6, 0.4)', // shadow-lg ambre
                            }
                        }}
                    >
                        Réserver un rendez-vous
                    </Button>

                </div>

            </div>



        </section>
    );
}