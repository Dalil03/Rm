"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
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
    typologie: "",
    description: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Votre message a été envoyé avec succès !");
        setFormData({
          prenom: "",
          nom: "",
          email: "",
          tel: "",
          adresse: "",
          typologie: "",
          description: "",
        });
        onClose();
        // Redirection vers Calendly
        window.location.href = "https://calendly.com/rim-conciergerie/30min";
      } else {
        alert("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (error) {
      console.error(error);
      alert("Erreur lors de l'envoi.");
    }
  };

  return (
    <div>
      <div
        className="fixed inset-0 bg-black bg-opacity-80 z-40"
        onClick={onClose}
      />
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white w-full max-w-7xl rounded-xl shadow-lg flex">
          <div
            className="hidden md:flex w-1/2 bg-cover bg-center rounded-l-lg"
            style={{
              backgroundImage: `url('/Images/form_image.webp')`,
            }}
          />
          <div className="w-full md:w-1/2 p-8">
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4">Parlons de vous :</h2>
            <form onSubmit={handleSubmit}>
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

              <h3 className="text-lg font-semibold mb-2">Parlons de votre bien :</h3>

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
                  </select>
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="superficie">Superficie (m²)</Label>
                  <Input
                    id="superficie"
                    placeholder="Ex : 75"
                    type="number"
                    onChange={handleChange}
                  />
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
                className="bg-red-500 text-white py-2 px-4 rounded-xl w-full"
                type="submit"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
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
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default Form;
