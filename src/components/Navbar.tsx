'use client';

import React, { useState } from "react";
import { Menu } from "./ui/navbar-menu"; // Assurez-vous que `Menu` est correctement importé
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import useScrollVisibility from "@/hooks/useScrollVisibility";

// Définition du composant `MenuItem`
type MenuItemProps = {
  item: string;
  active: string | null;
  setActive: (item: string | null) => void;
  className?: string; // Permet de passer des classes supplémentaires
};

export const MenuItem = ({
  item,
  active,
  setActive,
  className,
}: MenuItemProps) => {
  return (
    <div
      onClick={() => setActive(item)}
      className={cn(
        "cursor-pointer px-6 py-3 rounded-full transition-colors duration-300",
        active === item ? "bg-gray-200 text-black" : "text-gray-700",
        className // Ajout des classes spécifiques
      )}
    >
      {item}
    </div>
  );
};

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const isVisible = useScrollVisibility();

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ y: 0 }}
        animate={{
          y: isVisible ? 0 : -131,
          transition: { duration: 0.3 },
        }}
        className={cn(
          "fixed top-10 inset-x-0 max-w-7xl mx-auto z-50 text-xl shadow-[rgba(0,0,0,0.3)_0px_4px_10px_-2px,_rgba(255,255,255,0.2)_0px_1px_0px_inset,_rgba(0,0,0,0.2)_0px_8px_20px_-5px] rounded-full transition-transform duration-300",
          className
        )}
      >
        <Menu setActive={setActive}>
          <p className="text-3xl absolute left-10 text-white cursor-pointer">.RM</p>

          {/* Accueil */}
          <Link href="/">
            <MenuItem
              setActive={setActive}
              active={active}
              item="Accueil"
              className="bg-white hover:bg-gray-100 text-black"
            />
          </Link>

          {/* Services */}
          <Link href="/Services">
            <MenuItem
              setActive={setActive}
              active={active}
              item="Services"
              className="bg-white hover:bg-gray-100 text-black"
            />
          </Link>

          {/* Prendre RDV */}
          <Link href="/RDV">
            <MenuItem
              setActive={setActive}
              active={active}
              item="Prendre RDV"
              className="bg-TextColor text-white hover:bg-opacity-90"
            />
          </Link>
        </Menu>
      </motion.nav>
    </AnimatePresence>
  );
}

export default Navbar;
