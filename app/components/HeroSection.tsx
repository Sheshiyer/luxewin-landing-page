"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";

export function HeroSection() {
  return (
    <div className="h-[90vh] w-full relative flex items-center justify-center bg-white dark:bg-zinc-950">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-electric"></div>
      
      {/* Grid background with floating elements */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute h-full w-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-4 w-4 rounded-full bg-primary/70 dark:bg-secondary/70 backdrop-blur-sm"
              style={{
                left: `${(i * 5.3 + 2) % 100}%`,
                top: `${(i * 7.7 + 5) % 100}%`,
              }}
              animate={{
                y: [0, ((i * 13 + 7) % 50) - 25],
                x: [0, ((i * 11 + 3) % 50) - 25],
              }}
              transition={{
                duration: (i % 3) + 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white/50 dark:bg-zinc-950/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-heading"
        >
          Win Luxury Dreams
          <br /> with LUXWIN
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-4 text-xl md:text-2xl font-light text-zinc-600 dark:text-zinc-400 max-w-2xl"
        >
          Your chance to win extraordinary luxury items - from dream homes to supercars
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8"
        >
          <Button
            size="lg"
            color="warning"
            variant="shadow"
            className="font-bold text-lg bg-accent hover:bg-accent/90 transform hover:scale-105 transition-all"
            aria-label="Enter luxury raffle"
          >
            Enter a Luxury Raffle Now
          </Button>
        </motion.div>
      </div>

    </div>
  );
}
