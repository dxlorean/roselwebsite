// src/components/Contact.jsx
import React from "react";
import {
    Form,
    TextField,
    Label,
    Input,
    TextArea,
    Button,
    FieldError
} from "react-aria-components";
import { ShinyButton } from "@/components/ui/shiny-button"
import { motion } from "motion/react";
import emailjs from 'emailjs-com';

const service_id = import.meta.env.VITE_SERVICE_ID
const template_id = import.meta.env.VITE_CONTACT_TEMPLATE_ID
const pubkey = import.meta.env.VITE_CONTACT_PUBLIC_KEY

export default function Contact() {

    
    const handleSendContact = (e) => {
        e.preventDefault();
         const formData = Object.fromEntries(new FormData(e.currentTarget));
        console.log("Form submitted:", formData);
        emailjs.sendForm(service_id, template_id, e.target, pubkey)
            .then((result) => {
                console.log(result.text);
                //alert('Message Sent Successfully')
            }, (error) => {
                console.log(error.text);
                //alert('Something went wrong!')
            });
        e.target.reset()
    };
    return (
        <section className="bg-linear-to-b from-amber-100  to-amber-50 py-3 md:py-7 font-serif overflow-hidden">
            <img
                src="/emblem.png"
                alt=""
                className=" relative left-1/2 -translate-x-1/2 w-[80%] max-w-[200px] md:max-w-[250px] h-auto object-contain z-20 opacity-80"
            />
            <div className="pt-3 md:pt-7 mx-auto max-w-3xl px-4 md:px-8">


                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mx-auto flex w-full flex-col items-center text-center mb-12"
                >
                    <div id="contact" className='scroll-mt-[150px]' >
                        <h1 className='motion-preset-slide-up motion-duration-2000 motion-delay-300 text-3xl sm:text-2xl md:text-4xl lg:text-5xl text-red-800/90 [text-shadow:_0_10px_30px_rgba(131,24,67,0.4)] 
                                  z-0 pointer-events-none [-webkit-text-stroke:0.4px_#d4af37]  leading-relaxed max-w-3xl mx-auto font-bold text-center font-serif'>
                            Contactez nous
                        </h1>
                    </div>
                    <p className="mt-4 text-lg text-emerald-950/70 md:mt-6 max-w-2xl">
                        Nous serions ravis d'échanger avec vous. Remplissez ce formulaire et notre équipe vous répondra dans les plus brefs délais.
                    </p>
                </motion.div>

                {/* React Aria Form Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                >
                    <Form
                        onSubmit={handleSendContact}
                        className="space-y-6 bg-white p-8 md:p-10 rounded-xl border border-stone-100 shadow-2xl shadow-emerald-950/5"
                    >
                        {/* Name Field */}
                        <TextField id="name" name="name" isRequired className="flex flex-col w-full">
                            <Label className="block text-sm font-semibold tracking-wide text-emerald-950 mb-2">
                                Nom complet
                            </Label>
                            <Input
                                className="w-full border-b-2 border-stone-200 bg-stone-50/50 px-4 py-3 text-emerald-950 placeholder-stone-400 focus:bg-white focus:border-amber-500 focus:outline-none transition-all duration-300 rounded-t-md data-[invalid]:border-red-500"
                                placeholder="Jean Dupont"
                            />
                            <FieldError className="text-red-500 text-sm mt-1" />
                        </TextField>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Email Field */}
                            <TextField id="email" name="email" type="email" isRequired className="flex flex-col w-full">
                                <Label className="block text-sm font-semibold tracking-wide text-emerald-950 mb-2">
                                    Adresse Email
                                </Label>
                                <Input
                                    className="w-full border-b-2 border-stone-200 bg-stone-50/50 px-4 py-3 text-emerald-950 placeholder-stone-400 focus:bg-white focus:border-amber-500 focus:outline-none transition-all duration-300 rounded-t-md data-[invalid]:border-red-500"
                                    placeholder="jean@exemple.com"
                                />
                                <FieldError className="text-red-500 text-sm mt-1" />
                            </TextField>

                            {/* Phone Field */}
                            <TextField id="phone" name="phone" type="tel" className="flex flex-col w-full">
                                <Label className="block text-sm font-semibold tracking-wide text-emerald-950 mb-2">
                                    Téléphone
                                </Label>
                                <Input
                                    className="w-full border-b-2 border-stone-200 bg-stone-50/50 px-4 py-3 text-emerald-950 placeholder-stone-400 focus:bg-white focus:border-amber-500 focus:outline-none transition-all duration-300 rounded-t-md"
                                    placeholder="+33 6 12 34 56 78"
                                />
                            </TextField>
                        </div>

                        {/* Message Field */}
                        <TextField id="message" name="message" isRequired className="flex flex-col w-full">
                            <Label className="block text-sm font-semibold tracking-wide text-emerald-950 mb-2">
                                Votre Message
                            </Label>
                            <TextArea
                                rows={4}
                                className="w-full border-b-2 border-stone-200 bg-stone-50/50 px-4 py-3 text-emerald-950 placeholder-stone-400 focus:bg-white focus:border-amber-500 focus:outline-none transition-all duration-300 resize-none rounded-t-md data-[invalid]:border-red-500"
                                placeholder="Comment pouvons-nous vous aider ?"
                            />
                            <FieldError className="text-red-500 text-sm mt-1" />
                        </TextField>

                        {/* Submit Button */}
                        <div className=' text-center flex flex-col items-center'>
                            <ShinyButton className="w-full bg-emerald-50/50">Envoyer</ShinyButton>
                        </div>
                    </Form>
                </motion.div>
            </div>
        </section>
    );
}