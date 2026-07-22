import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ImgCard from "../components/ImgCard";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ScrollableContent from './ScrollableContent';
import {
    Form,
    TextField,
    Label,
    Input,
    TextArea,
    FieldError
} from "react-aria-components";
import { ChevronRight, ChevronLeft, Sparkles, X, CreditCard, Wallet } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
//import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import Fab from '@mui/material/Fab';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Cal, { getCalApi } from "@calcom/embed-react";

import emailjs from 'emailjs-com';

const service_id = import.meta.env.VITE_SERVICE_ID
const template_id = import.meta.env.VITE_DEVIS_TEMPLATE_ID
const pubkey = import.meta.env.VITE_CONTACT_PUBLIC_KEY


export default function AnchorTemporaryDrawer(
    { isopen, toggleDrawer, service = null, isdevis = false, initstep = 1 }) {


    const [step, setStep] = React.useState(initstep);
    const [selectedService, setSelectedService] = React.useState(service);
    const [devis_state, setDevisState] = React.useState(isdevis)

    /*useCalendlyEventListener({
        onEventScheduled: (e) => {
            console.log("Calendly booking confirmed!", e.data.payload);
            setStep(4); // Trigger the payment screen!
        },
    });*/

    React.useEffect(() => {
        (async function () {
            const cal = await getCalApi();

            cal("on", {
                action: "bookingSuccessful",
                callback: (e) => {
                    console.log("Booking done", e.detail.data);
                    setStep(4);
                }
            });
        })();
    }, []);

    React.useEffect(() => {
        if (isopen) {
            setStep(initstep);
            setDevisState(isdevis);
            setSelectedService(service);
        }
    }, [isopen, initstep, isdevis, service]);

    const selectService = (serviceId) => {
        setSelectedService(serviceId); // Save the choice
        setStep(2); // Automatically advance to step 2!
        setDevisState(false)
    };

    const selectDevis = (serviceId) => {
        setSelectedService(serviceId); // Save the choice
        setStep(2); // Automatically advance to step 2!
        setDevisState(true)
    }
    const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.currentTarget));
        console.log("Form submitted:", formData);
        if (devis_state) {


            console.log("Send devis")
            const formData = new FormData(e.target);
            const selectedActivities = formData.getAll("activities");
            const formattedActivities = selectedService == 'abo' ? 'ABONNEMENT' :
                selectedActivities.length > 0
                    ? selectedActivities.join(",\n ")
                    : "Aucune prestation sélectionnée";

            emailjs.send(service_id, template_id, {
                activities: formattedActivities,
                name: formData.get("name"),
                email: formData.get("email"),
                phone: formData.get("phone"),
                company: formData.get("company"),
                message: formData.get("message"),
                participants: formData.get("participants")
            }, pubkey)
                .then((result) => {
                    console.log(result.text);
                    // alert('Message Sent Successfully')
                }, (error) => {
                    console.log(error.text);
                    // alert('Something went wrong!')
                });
            e.target.reset()
            setStep(4);
        }
        else {
            nextStep();
        }
    };


//https://cal.eu/roselparis/30min

    const SERVICE_LABELS = {
        massage: "Massage Relaxation (30 min)",
        drainage: "Drainage Lymphatique (45 min)",
        madero: "Madérothérapie (45 min)",
        forfait: "Forfait Bien-Être (5 séances)",
        abo: "Abonnement",
        devis: "Devis Événement & Entreprise",
        ehpad: "EHPAD & Residences Seniors",
        cse: "Entreprises & CSE"
    };

    const SERVICE_LINKS = {
        massage: "roselparis/30min",
        drainage: "roselparis/drainage-lymphatique",
        madero: "roselparis/maderotherapie",
        forfait: "roselparis/forfait-5-seances",

    };

    const B2B_ACTIVITIES = {
        cse: [
            "Massage bien-être assis (Amma)",
            "Massage relaxation (Sur table)",
            "Ateliers gestion du stress",
            "Création d'espaces détente"
        ],
        ehpad: [
            "Massage doux (Mains, pieds, crâne)",
            "Drainage lymphatique léger",
            "Ateliers de stimulation sensorielle",
            "Accompagnement relaxation"
        ]
    };

    const list = () => (
        <Box
            role="presentation"

            sx={{ height: '100%' }}

        >
            <div className="flex flex-col h-full w-full bg-stone-50">


                <div className="relative shrink-0 bg-stone-50 pt-6 pb-4 px-4 md:px-6 border-b border-stone-200 z-10 flex flex-col items-center justify-center">


                    <h1 className="text-xl sm:text-2xl lg:text-3xl text-red-800/90 [text-shadow:_0_10px_30px_rgba(131,24,67,0.4)] z-0 pointer-events-none [-webkit-text-stroke:0.4px_#d4af37] leading-relaxed font-bold text-center font-serif">
                        {devis_state ? "Votre Devis" : "Votre Reservation"}
                    </h1>


                    {selectedService && SERVICE_LABELS[selectedService] && (
                        <div className="mt-2 animate-fade-in">
                            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-amber-200 bg-amber-50 text-[0.65rem] sm:text-xs font-bold  uppercase tracking-[0.15em] text-amber-700 shadow-sm">
                                {SERVICE_LABELS[selectedService]}
                            </span>
                        </div>
                    )}


                    <button
                        onClick={() => { toggleDrawer(false, step, devis_state) }}
                        className="absolute right-4 top-5 md:right-6 p-2 text-stone-400 hover:text-emerald-950 transition-colors rounded-full hover:bg-stone-200/50"
                        aria-label="Fermer le tiroir"
                    >
                        <X className="w-6 h-6 sm:w-7 sm:h-7" />
                    </button>

                </div>


                <div data-lenis-prevent="true" className="flex-1 overflow-y-auto overscroll-contain px-4 md:px-6 py-6 space-y-8">

                    {/* STEP 1 SERVICE SELECTION*/}
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1" // React needs a unique key to track the animation
                                initial={{ opacity: 0, x: -20 }} // Starting state (In)
                                animate={{ opacity: 1, x: 0 }}   // Resting state
                                exit={{ opacity: 0, x: 20 }}     // Ending state (Out)
                                transition={{ duration: 0.1 }}
                            >
                                <div className='flex  flex-col gap-5'>
                                    {!devis_state && <div>
                                        <div>
                                            <ImgCard onSelect={(service) => {
                                                selectService(service)
                                            }} type="massage" img="massage.png" title="Massage Relaxation (30 min) — 60 €" />
                                            <ImgCard onSelect={(service) => {
                                                selectService(service)
                                            }} type="drainage" img="traitement_drainage.png" title="Drainage Lymphatique (45 min) — 130 €" />


                                            <ImgCard onSelect={(service) => {
                                                selectService(service)
                                            }} type="madero" img="maderotherapy.png" title="Madérothérapie (45 min) — 130 €" />
                                            <div className="relative mt-2 max-w-[400px] mx-auto p-[3px] rounded-[18px] bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 shadow-2xl shadow-amber-600/20 transition-transform hover:-translate-y-1">
                                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-950 text-amber-400 font-bold tracking-widest uppercase text-xs px-5 py-1.5 rounded-full z-10 shadow-md flex items-center gap-2 whitespace-nowrap">
                                                    <Sparkles className="w-4 h-4" /> {/* Make sure Sparkles is imported */}
                                                    Offre Premium
                                                </div>

                                                <div className="rounded-[15px] overflow-hidden bg-white">
                                                    <ImgCard
                                                        img="/forfait-bien-etre.png"
                                                        title="Forfait Bien-Être — 600 €"
                                                        type="forfait"
                                                        onSelect={(service) => {
                                                            selectService(service)
                                                        }}
                                                    >
                                                        Cure complète de <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent font-bold drop-shadow-sm">
                                                            5 séances au choix
                                                        </span>{" "} (Drainage lymphatique <span className="font-bold">OU</span> Madérothérapie). Un accompagnement idéal pour des résultats durables sur votre silhouette et un bien-être profond.
                                                    </ImgCard>
                                                </div>
                                            </div>

                                            <div className="relative mt-8 max-w-[400px] w-full mx-auto p-[3px] rounded-[18px] bg-gradient-to-r from-red-300 via-red-500 to-red-300 transition-transform hover:-translate-y-1">

                                                {/* Badge Flottant */}
                                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-950 text-red-400 font-bold tracking-widest uppercase text-xs px-5 py-1.5 rounded-full z-10 shadow-md flex items-center gap-2 whitespace-nowrap">
                                                    <Sparkles className="w-4 h-4" />
                                                    Offre fidélité
                                                </div>

                                                {/* Removed flex-1 so it wraps tightly around the ImgCard */}
                                                <div className="rounded-[15px] overflow-hidden bg-white">
                                                    <ImgCard
                                                        title="Abonnements"
                                                        onSelect={(service) => {
                                                            selectService(service)
                                                            setDevisState(true)
                                                        }}
                                                        type='abo'
                                                    >
                                                        Abonnements annuels <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent font-bold drop-shadow-sm">
                                                            sur-mesure
                                                        </span>{" "}
                                                        (Interventions régulières <span className="font-bold">OU</span> soins à la carte). Un accompagnement idéal pour garantir un bien-être continu tout au long de l'année, adapté à vos besoins spécifiques. <br /><br /><span className="font-bold text-gray-800">Tarif sur devis.</span>
                                                    </ImgCard>
                                                </div>
                                            </div>
                                        </div>
                                    </div>}
                                    <ImgCard
                                        img="/journees.png"
                                        title="Entreprises & CSE"
                                        type="cse"
                                        onSelect={(service) => {
                                            selectDevis(service)
                                        }}
                                    >
                                        <p className="text-xl font-semibold mb-2 text-red-800/90 pointer-events-none [-webkit-text-stroke:0.2px_#d4af37]">
                                            Sur Devis
                                        </p>
                                    </ImgCard>
                                    <ImgCard
                                        img="/ehpad2.png"
                                        title="EHPAD & Residences Seniors"
                                        type="ehpad"
                                        onSelect={(service) => {
                                            selectDevis(service)
                                        }}
                                    >
                                        <p className="text-xl font-semibold mb-2 text-red-800/90 pointer-events-none [-webkit-text-stroke:0.2px_#d4af37]">
                                            Sur Devis
                                        </p>
                                    </ImgCard>
                                </div>
                            </motion.div>
                        )}




                    </AnimatePresence>

                    {/* STEP 2 FORM SELECTION*/}
                    <AnimatePresence mode="wait">
                        {step === 2 && (
                            <motion.div
                                key="step2" // React needs a unique key to track the animation
                                initial={{ opacity: 0, x: -20 }} // Starting state (In)
                                animate={{ opacity: 1, x: 0 }}   // Resting state
                                exit={{ opacity: 0, x: 20 }}     // Ending state (Out)
                                transition={{ duration: 0.1 }}
                            >
                                {/* Name Field */}
                                <Form
                                    id="info-form"
                                    onSubmit={handleSubmit}
                                    className="space-y-6 bg-white p-8 md:p-10 rounded-xl border border-stone-100 shadow-2xl shadow-emerald-950/5"
                                >
                                    {devis_state &&
                                        <div>
                                            <TextField id="name" name="name" isRequired className="flex flex-col w-full ">
                                                <Label className="block text-sm font-semibold tracking-wide text-emerald-950 mb-2">
                                                    Nom complet
                                                </Label>
                                                <Input
                                                    className="w-full border-b-2 border-stone-200 bg-stone-50/50 px-4 py-3 text-emerald-950 placeholder-stone-400 focus:bg-white focus:border-amber-500 focus:outline-none transition-all duration-300 rounded-t-md data-[invalid]:border-red-500"
                                                    placeholder="Jean Dupont"
                                                />
                                                <FieldError className="text-red-500 text-sm mt-1" />
                                            </TextField>
                                            <TextField id="email" name="email" isRequired className="flex flex-col w-full pt-3">
                                                <Label className="block text-sm font-semibold tracking-wide text-emerald-950 mb-2">
                                                    Email
                                                </Label>
                                                <Input
                                                    className="w-full border-b-2 border-stone-200 bg-stone-50/50 px-4 py-3 text-emerald-950 placeholder-stone-400 focus:bg-white focus:border-amber-500 focus:outline-none transition-all duration-300 rounded-t-md data-[invalid]:border-red-500"
                                                    placeholder="example@something.com"
                                                />
                                                <FieldError className="text-red-500 text-sm mt-1" />
                                            </TextField>
                                            <TextField id="phone" name="phone" isRequired className="flex flex-col w-full pt-3">
                                                <Label className="block text-sm font-semibold tracking-wide text-emerald-950 mb-2">
                                                    Téléphone
                                                </Label>
                                                <Input
                                                    className="w-full border-b-2 border-stone-200 bg-stone-50/50 px-4 py-3 text-emerald-950 placeholder-stone-400 focus:bg-white focus:border-amber-500 focus:outline-none transition-all duration-300 rounded-t-md data-[invalid]:border-red-500"
                                                    placeholder="+3398045016"
                                                />
                                                <FieldError className="text-red-500 text-sm mt-1" />
                                            </TextField>
                                        </div>}

                                    {/* B2B */}
                                    {devis_state && selectedService != 'abo' &&

                                        <div>


                                            <TextField id="company" name="company" isRequired className="flex flex-col w-full pt-3">
                                                <Label className="block text-sm font-semibold tracking-wide text-emerald-950 mb-2">
                                                    Nom de l'entreprise
                                                </Label>
                                                <Input
                                                    className="w-full border-b-2 border-stone-200 bg-stone-50/50 px-4 py-3 text-emerald-950 placeholder-stone-400 focus:bg-white focus:border-amber-500 focus:outline-none transition-all duration-300 rounded-t-md data-[invalid]:border-red-500"
                                                    placeholder="Company/EHPAD Name"
                                                />
                                                <FieldError className="text-red-500 text-sm mt-1" />
                                            </TextField>
                                            <TextField id="participants" name="participants" isRequired className="flex flex-col w-full pt-3">
                                                <Label className="block text-sm font-semibold tracking-wide text-emerald-950 mb-2">
                                                    Nombre de participants estimé
                                                </Label>
                                                <Input
                                                    className="w-full border-b-2 border-stone-200 bg-stone-50/50 px-4 py-3 text-emerald-950 placeholder-stone-400 focus:bg-white focus:border-amber-500 focus:outline-none transition-all duration-300 rounded-t-md data-[invalid]:border-red-500"
                                                    placeholder="10"
                                                />
                                                <FieldError className="text-red-500 text-sm mt-1" />
                                            </TextField>
                                            {/* Extract the correct list. Default to an empty array if somehow neither is selected */}
                                            {/* const activitiesList = B2B_ACTIVITIES[selectedService] || []; */}

                                            <div className="flex flex-col w-full pt-3 animate-fade-in">
                                                <label className="block text-sm font-semibold tracking-wide text-emerald-950 mb-2">
                                                    Activités Envisagées
                                                </label>

                                                <FormGroup>
                                                    {(B2B_ACTIVITIES[selectedService] || []).map((activity, index) => (
                                                        <FormControlLabel
                                                            key={index}
                                                            control={
                                                                <Checkbox
                                                                    name="activities" // Group them under the same form name
                                                                    value={activity}
                                                                    sx={{
                                                                        color: '#d6d3d1', // Neutral stone color when unchecked
                                                                        padding: '6px 9px', // Tighter spacing so the list isn't too tall
                                                                        '&.Mui-checked': {
                                                                            color: '#d97706', // Your brand's Amber-600 when checked
                                                                        },
                                                                    }}
                                                                />
                                                            }
                                                            label={
                                                                <span className="text-sm text-emerald-950/85">
                                                                    {activity}
                                                                </span>
                                                            }
                                                        />
                                                    ))}

                                                    {/* Optional "Autre" (Other) option that always appears */}
                                                    <FormControlLabel
                                                        control={
                                                            <Checkbox
                                                                name="activities"
                                                                value="Autre"
                                                                sx={{ color: '#d6d3d1', padding: '6px 9px', '&.Mui-checked': { color: '#d97706' } }}
                                                            />
                                                        }
                                                        label={<span className="text-sm text-emerald-950/85">Autre (à préciser)</span>}
                                                    />
                                                </FormGroup>
                                            </div>




                                        </div>

                                    }
                                    {/* Message Field */}
                                    <TextField name="message" isRequired={devis_state || selectedService == 'abo'} className="flex flex-col w-full">
                                        <Label className="block text-sm font-semibold tracking-wide text-emerald-950 mb-2">
                                            {selectedService == 'abo' ? 'Services' : (devis_state ? "Détails de l'événement" : "Conditions spécifiques (Optionnel)")}
                                        </Label>
                                        <TextArea
                                            rows={12}
                                            className="w-full border-b-2 border-stone-200 bg-stone-50/50 px-4 py-3 text-emerald-950 placeholder-stone-400 focus:bg-white focus:border-amber-500 focus:outline-none transition-all duration-300 resize-none rounded-t-md data-[invalid]:border-red-500"
                                            placeholder={selectedService == 'abo' ? 'Soins souhaitees, frequence..' : (devis_state ? "Décrivez la date souhaitée, le lieu, et vos attentes particulières..." : "Avez-vous des zones de tension, allergies, grossesse...")}
                                        />
                                        <FieldError className="text-red-500 text-sm mt-1" />
                                    </TextField>
                                </Form>
                            </motion.div>
                        )}

                    </AnimatePresence>

                    {/*STEP 3 CAL COM booking and payment*/}
                    <AnimatePresence mode="wait">
                        {step === 3 && (
                            <motion.div
                                key="step3" // React needs a unique key to track the animation lolzers edit2
                                initial={{ opacity: 0, x: -20 }} // Starting state (In)
                                animate={{ opacity: 1, x: 0 }}   // Resting state
                                exit={{ opacity: 0, x: 20 }}     // Ending state (Out)
                                transition={{ duration: 0.1 }}
                            >

                                <Cal style={{ width: "100%", height: "100%", overflow: "scroll" }}
                                    config={{
                                        layout: "month_view"
                                    }}
                                    calOrigin="https://app.cal.eu"    
                                    calLink={SERVICE_LINKS[selectedService]}></Cal>
                            </motion.div>
                        )}







                    </AnimatePresence>

                    {/*STEP 4 sucess*/}

                    <AnimatePresence mode="wait">
                        {step === 4 && (
                            <motion.div
                                key="step4" // React needs a unique key to track the animation
                                initial={{ opacity: 0, x: -20 }} // Starting state (In)
                                animate={{ opacity: 1, x: 0 }}   // Resting state
                                exit={{ opacity: 0, x: 20 }}     // Ending state (Out)
                                transition={{ duration: 0.1 }}
                            >
                                <div className="flex flex-col  sm:flex-row gap-4 w-full justify-center mt-6">

                                    <h1 className="text-xl sm:text-2xl lg:text-3xl text-red-800/90 [text-shadow:_0_10px_30px_rgba(131,24,67,0.4)] z-0 pointer-events-none [-webkit-text-stroke:0.4px_#d4af37] leading-relaxed font-bold text-center font-serif">
                                        Votre rendez vous est
                                        <br></br> confirme! <br></br>
                                        Merci


                                    </h1>



                                </div>
                            </motion.div>
                        )}







                    </AnimatePresence>








                </div>


                <div className="shrink-0 sticky bottom-0 z-20 w-full bg-white border-t border-stone-200 p-4 sm:p-6 flex justify-between items-center shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)]">

                    {step < 4 && <Button
                        variant="outlined"
                        startIcon={<ChevronLeft />}

                        onClick={() => {
                            prevStep()
                        }}
                        sx={{
                            py: 1.2,
                            px: 3,
                            fontSize: '0.9rem',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            color: '#022c22',
                            borderColor: '#022c22',
                            borderWidth: '2px',
                            '&:hover': {
                                borderWidth: '2px',
                                borderColor: '#d97706',
                                color: '#d97706',
                                backgroundColor: 'rgba(217, 119, 6, 0.04)',
                            }
                        }}
                    >
                        Retour
                    </Button>}

                    {step < 3 && <Button
                        variant="contained"
                        type={step === 2 ? "submit" : "button"}
                        form={step === 2 ? "info-form" : undefined}
                        endIcon={<ChevronRight />}
                        onClick={() => {
                            if (step != 2) {
                                nextStep()
                            }
                        }}
                        sx={{
                            py: 1.2,
                            px: 4,
                            fontSize: '0.9rem',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            backgroundColor: '#022c22',
                            color: '#ffffff',
                            boxShadow: '0 4px 10px -2px rgba(2, 44, 34, 0.3)',
                            '&:hover': {
                                backgroundColor: '#d97706',
                                boxShadow: '0 4px 10px -2px rgba(217, 119, 6, 0.4)',
                            }
                        }}
                    >
                        {devis_state && step === 2 ? 'Envoyer' : "Suivant"}
                    </Button>}
                </div>

            </div>
        </Box>
    );

    return (
        <div>
            <Drawer
                anchor={'right'}
                open={isopen}
                //onClose={toggleDrawer(false)}
                // onClick={toggleDrawer(false)}
                paperprops={{
                    className: "w-full sm:w-[450px] h-full"
                }}
            >
                {list()}
            </Drawer>
        </div>
    );
}