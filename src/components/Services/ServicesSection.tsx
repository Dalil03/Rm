"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Button } from "@/components/ui/moving-border";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { div, h1, span } from "framer-motion/client";




export function Services() {
  return (
<section className="w-full font-Ubuntu  py-16">
  <div className="container mx-auto ">
    <h2 className="text-5xl font-bold text-center mb-10 text-black">
      Découvrez nos <span className="text-TextColor">Services</span>  !!
    </h2>
    <BentoGrid className="  mx-auto xl:auto-rows-[20rem]  lg:grid-cols-8  ">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
    <div className="flex flex-col sm:flex-row items-center justify-center  flex-wrap mt-6 ">
    <Button className=" bg-servicesButtonColor">
    Services
  </Button>
    </div>

  </div>

</section>
  );
}



const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };



  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  
  // Utiliser des valeurs fixes au lieu de Math.random()
  const widths = [60, 45, 70, 85, 50, 65]; // Pourcentages fixes
  
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      {widths.map((width, i) => (
        <motion.div
          key={"skeleton-two-" + i}
          variants={variants}
          style={{
            maxWidth: `${width}%`,
          }}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};

  




  

interface ImageWithAnimationProps {
  src: string;
  alt: string;
}

const ImageWithAnimation = ({ src, alt }: ImageWithAnimationProps) => {
  const imageVariants = {
    initial: {
      scale: 1,
      filter: "brightness(100%)",
    },
    hover: {
      scale: 1.05,
      filter: "brightness(110%)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      variants={imageVariants}
      initial="initial"
      whileHover="hover"
      className="w-full h-full rounded-lg overflow-hidden"
    >
      <Image
        src={src}
        alt={alt}
        width={400}
        height={300}
        className="w-full h-full object-cover rounded-lg transform"
      />
    </motion.div>
  );
};

const items = [
  {
    title: "Création d'annonces attractives",
    description: (
      <span className="text-sm font-medium text-gray-500">
        Boostez vos réservations avec des annonces irrésistibles.
      </span>
    ),
    header: (
      <ImageWithAnimation 
        src="/Images/chalet_Art.jpg" 
        alt="Création d'annonces" 
      />
    ),
    className: "md:col-span-2",
    icon: null,
  },

  {
    title: "Optimisation des annonces",
    description: (
      <span className="text-sm font-medium text-gray-500">
        Boostez vos réservations avec des annonces optimisées pour attirer plus de voyageurs.
      </span>
     ),
     header: (
       <ImageWithAnimation 
         src="/Images/optimisation_annonces_Art.jpg" 
         alt="Création d'annonces" 
       />
     ),
     className: "md:col-span-2",
     icon: null,
   },

  {
    title: "Stratégie tarifaire dynamique",
    description: (
      <span className="text-sm text-gray-500 font-medium">
        Maximisez vos revenus avec des tarrifs ajustés en temps réel.
      </span>
    ),
    header: (
      <ImageWithAnimation 
        src="/Images/stratégie_tarrifiaire.jpg" 
        alt="Création d'annonces" 
      />
    ),
    className: "md:col-span-2",
    icon: null,
  },
  
  {
    title: "Gestion complète des voyageurs",
    description: (
      <span className="text-sm text-gray-500 font-medium">
        Assurez une expérience unique pour vos voyageurs.
      </span>
    ),
    
    header: (
      <ImageWithAnimation 
        src="/Images/voyageurs.jpg" 
        alt="Création d'annonces" 
      />
    ),
    className: "md:col-span-2",
    icon: null,
  },

  {
    title: "Sécurisation et accès simplifié",
    description: (
      <span className="text-sm text-gray-500 font-medium">
        Assurez une gestion des clés facile et sécurisée.
      </span>
    ),
   
    header: (
      <ImageWithAnimation 
        src="/Images/sécurisation.jpg" 
        alt="Création d'annonces" 
      />
    ),
    className: "md:col-span-2",
    icon: null,
  },


  {
    title: "Entretien et blanchisserie professionnels",
    description: (
      <span className="text-sm text-gray-500 font-medium">
        Assurez un intérieur toujours impeccable à vos voyageurs.
      </span>
    ),
    header: (
      <ImageWithAnimation 
        src="/Images/blanchisserie.jpeg" 
        alt="Création d'annonces" 
      />
    ),
    className: "md:col-span-2",
    icon: null,
  },


  {
    title: "Gestion des litiges",
    description: (
      <span className="text-sm">
        Résolvez les litiges sans stress : nous gérons tout pour vous.
      </span>
    ),
    header: (
      <ImageWithAnimation 
        src="/Images/litiges.jpeg" 
        alt="Création d'annonces" 
      />
    ),
    className: "md:col-span-2",
    icon: null,
  },


  {
    title: "Shooting Photo professionnel",
    description: (
      <span className="text-sm">
        Attirez plus de locataires avec des photos de qualité.
      </span>
    ),
    header: (
      <ImageWithAnimation
        src="/Images/Shooting_photo.jpg"
        alt="Shooting Photo professionnel"
      />
    ),
    className: "md:col-span-2",
    icon: null,
  },
];

export default Services



