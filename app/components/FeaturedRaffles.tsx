"use client";
import React from "react";
import { Card, Button, Progress } from "@nextui-org/react";
import { motion } from "framer-motion";

const raffles = [
  {
    title: "Rolex Daytona",
    image: "https://placehold.co/600x400",
    price: "$250",
    endDate: "2024-03-01",
    totalTickets: 1000,
    remainingTickets: 456,
  },
  {
    title: "Luxury Villa in Bali",
    image: "https://placehold.co/600x400",
    price: "$500",
    endDate: "2024-03-15",
    totalTickets: 2000,
    remainingTickets: 892,
  },
  {
    title: "Ferrari F8 Tributo",
    image: "https://placehold.co/600x400",
    price: "$1000",
    endDate: "2024-03-30",
    totalTickets: 5000,
    remainingTickets: 2341,
  },
];

export function FeaturedRaffles() {
  return (
    <section className="py-section bg-bg-light dark:bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-heading">
            Featured Luxury Raffles
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-300">
            Enter now for a chance to win these exclusive prizes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {raffles.map((raffle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden group hover:shadow-lg transition-all dark:bg-zinc-900">
                <img
                  src={raffle.image}
                  alt={raffle.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{raffle.title}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-primary font-bold">
                      {raffle.price}/ticket
                    </span>
                    <span className="text-zinc-500 dark:text-zinc-400">
                      Ends: {new Date(raffle.endDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="mb-4">
                    <Progress
                      value={(raffle.remainingTickets / raffle.totalTickets) * 100}
                      color="primary"
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm text-zinc-500 dark:text-zinc-400">
                      <span>{raffle.remainingTickets} tickets left</span>
                      <span>{raffle.totalTickets} total</span>
                    </div>
                  </div>
                  <Button
                    color="primary"
                    className="w-full bg-primary hover:bg-primary/90 transform group-hover:scale-105 transition-all"
                    size="lg"
                    aria-label={`Enter ${raffle.title} raffle`}
                  >
                    Enter Raffle
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
