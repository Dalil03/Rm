'use client'
import React from 'react'
import { HoverEffect } from "@/components/ui/card-hover-effect";


export const projects = [
  {
    title: "Prendre rendez-vous",
    description:
      "Nous prenons contact avec vous pour répondre à toutes vos questions sur la conciergerie et prévoir une future visite.",
    link: "#",
  },
  {
    title: "Visite du logement",
    description:
      "Nous venons visiter votre logement, afin de noter toutes vos remarques, recommandations et tous les défauts du logement.",
    link: "/",
  },
  {
    title: "Lancement des services",
    description:
      "Après la signature du contrat et la remise des clés, nous commençons à travailler sur votre annonce !",
    link: "//",
  },

];

function inscription() {
  return (
    <div className=' font-Ubuntu bg-InscriptionColor min-h-screen w-full flex justify-center  py-36'>
      <div>
        <div className='text-center'>
          <h2 className=' text-black font-semibold tracking-wide uppercase text-3xl' >Comment ça marche ?</h2><br />
          <h3 className=' text-5xl leading-8 font-extrabold tracking-tight text-TextColor  ' >Une inscription en 3 étapes</h3>
        </div>

        <div className="max-w-6xl mx-auto px-8 mt-28">
          <HoverEffect items={projects} />
        </div>

        {/* Text en dessous des cards */}
        {/* <div className='mt-24 text-center text-3xl font-semibold tracking-tight'>
          <p>Conciergerie immobilière </p>
          <p>Spécialisé en location courte durée </p>
          <p>Maximiser vos revenus, sans lever le petit doigt!</p>

        </div> */}
      </div>
    </div>
  )
}

export default inscription