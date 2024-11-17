"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";

const PLATFORM_BUTTONS = [
  {
    name: "Airbnb",
    imageSrc: "/Images/arbnb_logo.svg",
    alt: "Airbnb logo"
  },
  {
    name: "Google",
    imageSrc: "/Images/Google__G__logo.svg.png",
    alt: "Google logo"
  },
  {
    name: "Booking",
    imageSrc: "/Images/booking_logo.png",
    alt: "Booking logo"
  }
] as const;

function HeroSection() {
  return (
    <section
      className="min-h-[100vh] w-full bg-customColor flex items-center justify-center px-4 py-16 sm:py-24 lg:py-32 bg-cover bg-center bg-no-repeat relative"
      style={{
        // backgroundImage: 'url("/Images/Villa.jpg")' 
      }}
    >
      {/* Spotlight Effect */}
      <Spotlight
        className="absolute -top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl font-Ubuntu mx-auto text-center mt-24 space-y-24">
        {/* Main Title */}
        <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-bold mb-8">
          La conciergerie{" "}
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-clip-text text-transparent bg-TextColor [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span>Qui vous libère</span>
            </div>
            <div className="relative bg-clip-text text-transparent bg-gradient-to-r">
              <span>Qui vous libère !</span>
            </div>
          </div>
        </h1>

        {/* Subtitle */}
        <p className="text-white sm:text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto text-justify mb-16">
          Votre partenaire pour gérer vos locations courte et moyenne durée. 
          Nous nous occupons de tout, de l'arrivée à la sortie des voyageurs. 
          Faites-nous confiance pour vous simplifier la vie et augmenter vos revenus.
        </p>

        {/* Platform Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 flex-wrap mt-12">
          {PLATFORM_BUTTONS.map((platform) => (
            <Button
              key={platform.name}
              borderRadius="1.75rem"
              className="w-full sm:w-auto"
            >
              <img 
                src={platform.imageSrc} 
                alt={platform.alt} 
                className="h-12 sm:h-16 w-auto object-contain"
                loading="lazy"
              />
              <span className="ml-2">{platform.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
