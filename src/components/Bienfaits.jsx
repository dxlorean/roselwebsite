import { Brain, BatteryCharging, Users, ShieldCheck, Flower2 } from "lucide-react";

export const BienfaitsList = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12 font-serif">
      
      {/* Titre de la section */}
      <div className="flex items-center justify-center gap-3 mb-10 text-emerald-950">
        <Flower2 className="w-5 h-5 text-amber-600" />
        <h3 className="text-2xl font-bold tracking-widest uppercase">
          Les bienfaits pour tous
        </h3>
        <Flower2 className="w-5 h-5 text-amber-600" />
      </div>

      {/* Liste des bienfaits */}
      <div className="flex flex-col">
        
        {/* Item 1 : Stress */}
        <div className="flex items-center gap-6 border-b border-stone-200/80 py-6">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-emerald-950 text-amber-400 shrink-0 shadow-md">
            <Brain className="w-7 h-7" />
          </div>
          <p className="flex flex-col">
            <strong className="text-emerald-950 font-bold text-lg tracking-wide">
              RÉDUIRE LE STRESS
            </strong>
            <span className="text-emerald-950/80 text-base mt-1">
              et les tensions physiques et mentales
            </span>
          </p>
        </div>

        {/* Item 2 : Qualité de vie */}
        <div className="flex items-center gap-6 border-b border-stone-200/80 py-6">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-emerald-950 text-amber-400 shrink-0 shadow-md">
            <BatteryCharging className="w-7 h-7" />
          </div>
          <p className="flex flex-col">
            <strong className="text-emerald-950 font-bold text-lg tracking-wide">
              AMÉLIORER LA QUALITÉ DE VIE
            </strong>
            <span className="text-emerald-950/80 text-base mt-1">
              et la concentration au quotidien
            </span>
          </p>
        </div>

        {/* Item 3 : Cohésion */}
        <div className="flex items-center gap-6 border-b border-stone-200/80 py-6">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-emerald-950 text-amber-400 shrink-0 shadow-md">
            <Users className="w-7 h-7" />
          </div>
          <p className="flex flex-col">
            <strong className="text-emerald-950 font-bold text-lg tracking-wide">
              RENFORCER LA COHÉSION
            </strong>
            <span className="text-emerald-950/80 text-base mt-1">
              et créer un climat de travail positif
            </span>
          </p>
        </div>

        {/* Item 4 : Prévention */}
        <div className="flex items-center gap-6 border-b border-stone-200/80 py-6">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-emerald-950 text-amber-400 shrink-0 shadow-md">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <p className="flex flex-col">
            <strong className="text-emerald-950 font-bold text-lg tracking-wide">
              PRÉVENIR LES RISQUES
            </strong>
            <span className="text-emerald-950/80 text-base mt-1">
              (douleurs, burn-out, absentéisme...)
            </span>
          </p>
        </div>

        {/* Item 5 : Santé globale (sans bordure en bas) */}
        <div className="flex items-center gap-6 pt-6">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-emerald-950 text-amber-400 shrink-0 shadow-md">
            <Flower2 className="w-7 h-7" />
          </div>
          <p className="flex flex-col">
            <strong className="text-emerald-950 font-bold text-lg tracking-wide">
              FAVORISER LE BIEN-ÊTRE DURABLE
            </strong>
            <span className="text-emerald-950/80 text-base mt-1">
              et la santé globale
            </span>
          </p>
        </div>

      </div>
    </div>
  );
};