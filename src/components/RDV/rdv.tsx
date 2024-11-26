"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface FormData {
  prenom: string;
  nom: string;
  email: string;
  tel: string;
  adresse: string;
  typologie: string;
  description: string;
}

export function Form({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState<FormData>({
    prenom: "",
    nom: "",
    email: "",
    tel: "",
    adresse: "",
    typologie: "Studio",
    description: "",
  });

  const [message, setMessage] = useState<string | null>(null);
  const controls = useAnimation(); // Animation controls
  const sectionRef = useRef<HTMLDivElement>(null); // Observer for visibility

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [controls]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    return Object.values(formData).every((value) => value.trim() !== "");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      setMessage("Veuillez remplir tous les champs.");
      return;
    }

    try {
      const response = await fetch("api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage(
          "Votre message a bien été envoyé !\n\nVous allez être redirigé vers Calendly..."
        );
        setTimeout(() => {
          window.open("https://calendly.com/rim-conciergerie/30min", "_blank");
          setMessage(null); // Ferme le message d'envoi
          onClose(); // Ferme le formulaire
        }, 3000);
      } else {
        setMessage("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60"
    >
      <div
        ref={sectionRef}
        className="bg-white w-full max-w-6xl rounded-xl shadow-lg flex flex-wrap overflow-hidden"
      >
        {/* Image section with animation inside */}
        <motion.div
          className="hidden md:flex w-full md:w-1/2 h-auto bg-cover bg-center rounded-l-lg overflow-hidden"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2,
              },
            },
          }}
        >
          <motion.div
            className="h-full w-full"
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{
              duration: 10,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <img
              src="/Images/form_image.webp"
              alt="Form Visual"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </motion.div>

        <div className="w-full md:w-1/2 p-8 relative">
          {!message && (
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
          )}
          {message ? (
            <div className="flex items-center justify-center h-[250px] text-center">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-textColor text-xl font-semibold whitespace-pre-line leading-relaxed"
              >
                {message}
              </motion.p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2 className="text-xl text-textColor font-bold mb-4">Parlons de votre projet :</h2>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                  <Label htmlFor="prenom">Prénom</Label>
                  <Input
                    id="prenom"
                    placeholder="Votre Prénom"
                    type="text"
                    value={formData.prenom}
                    onChange={handleChange}
                  />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="nom">Nom</Label>
                  <Input
                    id="nom"
                    placeholder="Votre Nom"
                    type="text"
                    value={formData.nom}
                    onChange={handleChange}
                  />
                </LabelInputContainer>
              </div>

              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Votre Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </LabelInputContainer>

              <LabelInputContainer className="mb-4">
                <Label htmlFor="tel">Téléphone</Label>
                <Input
                  id="tel"
                  placeholder="Ex : 01 23 45 67 89"
                  type="tel"
                  value={formData.tel}
                  onChange={handleChange}
                />
              </LabelInputContainer>

              <h3 className="text-lg text-textColor font-semibold mb-2">Détails sur votre bien :</h3>

              <LabelInputContainer className="mb-4">
                <Label htmlFor="adresse">Adresse</Label>
                <Input
                  id="adresse"
                  placeholder="Votre Adresse"
                  type="text"
                  value={formData.adresse}
                  onChange={handleChange}
                />
              </LabelInputContainer>

              <div className="flex space-x-2 mb-4">
                <LabelInputContainer>
                  <Label htmlFor="typologie">Typologie</Label>
                  <select
                    id="typologie"
                    className="border-gray-300 rounded-md h-10 px-2"
                    value={formData.typologie}
                    onChange={handleChange}
                  >
                    <option value="Studio">Studio</option>
                    <option value="Appartement">Appartement</option>
                    <option value="Maison">Maison</option>
                    <option value="Chalet">Chalet</option>
                    <option value="Villa">Villa</option>
                  </select>
                </LabelInputContainer>
              </div>

              <LabelInputContainer className="mb-4">
                <Label htmlFor="description">Description</Label>
                <textarea
                  id="description"
                  placeholder="Décrivez votre bien"
                  className="border-gray-300 rounded-md w-full h-20 p-2"
                  value={formData.description}
                  onChange={handleChange}
                />
              </LabelInputContainer>

              <button
                className="bg-red-500 text-white py-2 px-4 rounded-xl w-full hover:bg-red-600 transition duration-300"
                type="submit"
              >
                Envoyer
              </button>
            </form>
          )}
        </div>
      </div>
    </motion.div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>
  );
};

export default Form;
