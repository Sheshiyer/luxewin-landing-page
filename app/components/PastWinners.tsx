"use client";
import React from "react";
import { Card } from "@nextui-org/react";
import { motion } from "framer-motion";

const winners = [
  {
    name: "James Wilson",
    prize: "Rolex Submariner",
    date: "January 2024",
    location: "London, UK",
    testimonial: "I never thought I'd win! The process was seamless and the watch is absolutely genuine.",
    image: "https://placehold.co/100x100",
  },
  {
    name: "Sarah Chen",
    prize: "Porsche 911 GT3",
    date: "December 2023",
    location: "Singapore",
    testimonial: "LUXWIN made my dream of owning a supercar come true. Incredible experience!",
    image: "https://placehold.co/100x100",
  },
  {
    name: "Michael Brown",
    prize: "Maldives Villa",
    date: "November 2023",
    location: "New York, USA",
    testimonial: "From entering to winning, everything was transparent and professional.",
    image: "https://placehold.co/100x100",
  },
];

export function PastWinners() {
  return (
    <section className="py-section">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-heading">
            Our Lucky Winners
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-300">
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
              <Card className="p-6 hover:shadow-lg transition-all dark:bg-zinc-900">
                <div className="flex items-start gap-4">
                  <img
                    src={winner.image}
                    alt={winner.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold mb-1">{winner.name}</h3>
                    <p className="text-primary font-semibold mb-2">
                      Won: {winner.prize}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-3">
                      <span>{winner.location}</span>
                      <span>•</span>
                      <span>{winner.date}</span>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-300 italic">
                      "{winner.testimonial}"
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
          <div className="bg-bg-light dark:bg-zinc-900 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4 font-heading">Winner Statistics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-4xl font-bold text-primary">1,000+</p>
                <p className="text-zinc-600 dark:text-zinc-300">Winners Worldwide</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-secondary">$50M+</p>
                <p className="text-zinc-600 dark:text-zinc-300">In Prizes Awarded</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-accent">100%</p>
                <p className="text-zinc-600 dark:text-zinc-300">Verified Authentic</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
