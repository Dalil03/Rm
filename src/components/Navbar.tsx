'use client';
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import useScrollVisibility from "@/hooks/useScrollVisibility";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const isVisible = useScrollVisibility();

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ 
          y: isVisible ? 0 : -131,
          transition: { duration: 0.3 }
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
            <MenuItem setActive={setActive} active={active} item="Accueil" />
          </Link>

          {/* Services */}
          <Link href="/Services">
            <MenuItem setActive={setActive} active={active} item="Services" />
          </Link>

          {/* Prendre RDV */}
          <Link href="/0">
            <MenuItem setActive={setActive} active={active} item="Prendre RDV" />
          </Link>
        </Menu>
      </motion.nav>
    </AnimatePresence>
  );
}


export default Navbar;