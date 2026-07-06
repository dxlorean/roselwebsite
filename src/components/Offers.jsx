import { ShinyButton } from "@/components/ui/shiny-button"
  import {Diamond} from "lucide-react"; 
  import {DrawCircleText} from "../components/DrawCircleText"
export default function Offers() {
    return (
        <section className="relative px-6 lg:px-8  bg-linear-to-t from-amber-100 via-amber-200/50 to-amber-100 flex   pt-3 pb-0 md:pt-5 md:pb-5  items-center  overflow-hidden">

            {/* The Top Separator Emblem */}
            <img
                src="/emblem.png"
                alt=""
                className=" absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-[200px] md:max-w-[250px] h-auto object-contain z-20 opacity-80"
            />



            <div className="relative w-full max-w-8xl mx-auto flex flex-col z-10 px-5 pt-14 pb-20  lg:px-8">
                <div id="offers" className='scroll-mt-[110px]' >
                    <h1 className='motion-preset-slide-up motion-duration-2000 motion-delay-300 text-3xl sm:text-2xl md:text-4xl lg:text-5xl text-red-800/90 [text-shadow:_0_10px_30px_rgba(131,24,67,0.4)] 
                                  z-0 pointer-events-none [-webkit-text-stroke:0.4px_#d4af37]  leading-relaxed max-w-3xl mx-auto font-bold text-center font-serif'>
                        Au service de vos résidents et équipes
                    </h1>
                </div>
                <div className="pt-3">

                </div>
                <div className="motion-preset-slide-up motion-duration-2000 motion-delay-300 max-w-5xl mx-auto text-center font-serif space-y-8">

                    {/* Intro Text */}
                    <p className="text-lg md:text-xl text-emerald-950/80 leading-relaxed">
                        Fidélisez vos collaborateurs et valorisez votre établissement grâce à notre expertise en bien-être. Nous intervenons clé en main pour offrir des soins régénérants, renforçant votre démarche QVT sans contrainte organisationnelle pour vos équipes.
                    </p>

                  

                    <div className="motion-preset-slide-up motion-duration-2000 motion-delay-300 max-w-3xl mx-auto font-serif space-y-8">


                        {/* Section Title */}
                        <DrawCircleText>
                            <h2 className="text-2xl md:text-3xl bg-gradient-to-r from-emerald-950/80 via-green-800 to-emerald-950/80 bg-clip-text text-transparent font-bold text-center">
                            Pourquoi Rosel ?
                        </h2>
                        </DrawCircleText>

                        {/* Value Propositions: Left Aligned with Custom Bullets */}
                        <ul className="space-y-6 max-w-2xl mx-auto">
                            {[
                                { title: "Valorisation des résidents:", desc: "Offrez des instants de douceur et de sérénité qui améliorent leur quotidien." },
                                { title: "Fidélisation des équipes soignantes:", desc: "Un personnel qui se sent considéré est un personnel engagé." },
                                { title: "Renforcement de votre démarche QVT:", desc: "Une approche concrète pour améliorer le bien-être au travail." },
                                { title: "Image d'excellence:", desc: "Valorisez votre établissement auprès des familles par une attention dédiée au bien-être." },
                                { title: "Zéro contrainte:", desc: "Nous gérons le matériel, l'installation et l'organisation, vous permettant de rester concentrés sur vos missions." }
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4">
                                    {/* Custom Bullet Icon */}
                                    <Diamond className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />

                                    <p className="text-lg text-emerald-950/80">
                                        <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent font-bold">
                                            {item.title}
                                        </span>{" "}
                                        <span className="italic">{item.desc}</span>
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='pt-4 pb-4 md:pt-5 md:pb-5 lg:pt-6 lg:pb-6 text-center flex flex-col items-center'>
                                        <ShinyButton className="">Decouvrez nos formules</ShinyButton>
                                    </div>

                   
                </div>



            </div>



        </section>
    );
}