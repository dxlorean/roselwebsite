import ImgCard from "../components/ImgCard";
import { ShinyButton } from "@/components/ui/shiny-button"
import { HeroActionBlock } from "./HeroAction";

import Button from "@mui/material/Button";
import { CalendarIcon, DeleteIcon, SendIcon } from "lucide-react";

export default function Hero({toggleDrawer}) {


    return (
        <section className="relative px-6 lg:px-8  bg-amber-50 flex   pt-3 pb-0 md:pt-5   items-center  overflow-hidden">





            <div id="home" className="relative w-full  max-w-7xl mx-auto flex flex-col z-10 px-5 pt-20 pb-20  lg:px-8">
                <div className=' text-center flex flex-col items-center  md:pb-3   '>
                    <img
                        src="/logo8.png"
                        alt=""
                        className=" max-w-[350px] md:max-w-[450px] lg:max-w-[550px] h-auto object-contain z-20"
                    />

                </div>

                <div  >
                    <h1 className='italic text-xs md:text-sm lg:text-xl  text-gray-600/50  ] 
                                  z-0 pointer-events-none   leading-relaxed max-w-7xl mx-auto font-bold text-center font-serif'>
                       
                    </h1>
                </div>

                <p className="pt-5 pb-5 md:pb-7 md:pt-7 motion-preset-slide-up motion-duration-2000 motion-delay-300 text-lg md:text-xl text-emerald-950/80 leading-relaxed max-w-7xl mx-auto text-center font-serif">
                    <span className="italic">Rosel</span> accompagne les particuliers, les seniors et les professionnels dans une démarche
                    globale de bien-être, de vitalité et d'amélioration de la qualité de vie.

                </p>
                <p className="pt-5 pb-5 md:pb-7 md:pt-7 motion-preset-slide-up motion-duration-2000 motion-delay-300 text-lg md:text-xl text-emerald-950/80 leading-relaxed max-w-7xl mx-auto text-center font-serif">
                    Grâce à une expertise certifiée dans les domaines de la santé et de l'animation — en tant que
                    {" "}
                    <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent font-bold drop-shadow-sm">
                        Préparatrice en Pharmacie
                    </span> {" "}

                    et{" "}
                    <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent font-bold drop-shadow-sm">
                        Experte en Maderothérapie & Drainage
                    </span>{" "}   —, Rosel Paris conçoit des ateliers, animations et accompagnements favorisant l'équilibre, la prévention et le mieux-être au quotidien.
                </p>
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