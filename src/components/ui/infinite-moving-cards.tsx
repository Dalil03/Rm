'use client';

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <section className="relative py-20 sm:py-28 min-h-screen  w-full flex flex-col items-center justify-center bg-white dark:bg-gray-900">
      {/* Section Title */}
      <div className="text-center mb-12 px-6">
        <h2 className="text-gray-800 dark:text-white text-lg font-semibold uppercase tracking-wide">
          Ce que disent nos clients
        </h2>
        <h3 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100">
          Témoignages Inspirants
        </h3>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
          Découvrez ce que nos clients pensent de nos services. Vos retours sont
          essentiels pour continuer à offrir une expérience exceptionnelle.
        </p>
      </div>

      {/* Scroller Container */}
      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-10 w-full max-w-7xl min-h-[300px] overflow-hidden bg-white dark:bg-gray-800 bg-opacity-90 backdrop-blur-lg shadow-lg rounded-lg border border-gray-200 dark:border-gray-700",
          className
        )}
        style={{
          maskImage:
            "linear-gradient(to right, transparent, rgba(255,255,255,1), rgba(255,255,255,1), transparent)",
        }}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex min-w-full shrink-0 gap-8 py-8 w-max flex-nowrap",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {items.map((item, idx) => (
            <li
              key={idx}
              className="w-[350px] max-w-full relative rounded-lg shadow-md border border-gray-300 dark:border-gray-700 bg-gradient-to-t from-white to-gray-100 dark:from-gray-800 dark:to-gray-700 p-6 flex-shrink-0 md:w-[450px] hover:scale-105 transition-transform duration-300"
            >
              <blockquote>
                <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                  {item.quote}
                </p>
                <div className="mt-4">
                  <h5 className="text-gray-900 dark:text-white font-semibold text-lg">
                    {item.name}
                  </h5>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {item.title}
                  </p>
                </div>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
