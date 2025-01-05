"use client";
import React from "react";
import { Card } from "@nextui-org/react";
import { motion } from "framer-motion";
import Image from "next/image";

const winners = [
  {
    name: "James Wilson",
    prize: "Rolex Submariner",
    date: "January 2024",
    location: "London, UK",
    testimonial: "I never thought I'd win! The process was seamless and the watch is absolutely genuine.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
  },
  {
    name: "Sarah Chen",
    prize: "Porsche 911 GT3",
    date: "December 2023",
    location: "Singapore",
    testimonial: "luxewin made my dream of owning a supercar come true. Incredible experience!",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=faces",
  },
  {
    name: "Michael Brown",
    prize: "Maldives Villa",
    date: "November 2023",
    location: "New York, USA",
    testimonial: "From entering to winning, everything was transparent and professional.",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&h=150&fit=crop&crop=faces",
  },
];

export function PastWinners() {
  return (
    <section className="py-section relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-secondary/5 animate-gradient-slow" />
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-br from-primary via-purple-500 to-secondary bg-clip-text text-transparent font-heading">
            Our Lucky Winners
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
            Real winners, real dreams fulfilled
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {winners.map((winner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 hover:shadow-xl transition-all backdrop-blur-sm bg-white/20 dark:bg-zinc-900/50 group">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/20 to-secondary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Image
                      src={winner.image}
                      alt={winner.name}
                      width={64}
                      height={64}
                      className="rounded-full object-cover ring-2 ring-white/20 dark:ring-zinc-800/50"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 bg-gradient-to-br from-primary via-purple-500 to-secondary bg-clip-text text-transparent">
                      {winner.name}
                    </h3>
                    <p className="text-primary font-semibold mb-2 bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                      Won: {winner.prize}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-3">
                      <span>{winner.location}</span>
                      <span>•</span>
                      <span>{winner.date}</span>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-300 italic">
                      &ldquo;{winner.testimonial}&rdquo;
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="backdrop-blur-sm bg-white/20 dark:bg-zinc-900/50 rounded-lg p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-2xl font-bold mb-4 font-heading bg-gradient-to-br from-primary via-purple-500 to-secondary bg-clip-text text-transparent">
              Winner Statistics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              <div>
                <p className="text-4xl font-bold bg-gradient-to-br from-primary to-purple-500 bg-clip-text text-transparent">1,000+</p>
                <p className="text-zinc-600 dark:text-zinc-300">Winners Worldwide</p>
              </div>
              <div>
                <p className="text-4xl font-bold bg-gradient-to-br from-purple-500 to-secondary bg-clip-text text-transparent">$50M+</p>
                <p className="text-zinc-600 dark:text-zinc-300">In Prizes Awarded</p>
              </div>
              <div>
                <p className="text-4xl font-bold bg-gradient-to-br from-primary via-purple-500 to-secondary bg-clip-text text-transparent">100%</p>
                <p className="text-zinc-600 dark:text-zinc-300">Verified Authentic</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
