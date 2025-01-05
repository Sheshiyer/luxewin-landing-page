"use client";
import React from "react";
import { Card, Button, Progress } from "@nextui-org/react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Image from "next/image";
import { CountdownTimer } from "./CountdownTimer";

type Tier = "gold" | "silver" | "bronze";

interface Raffle {
  title: string;
  image: string;
  price: string;
  endDate: string;
  totalTickets: number;
  remainingTickets: number;
  prizeValue: string;
  tier: Tier;
  description: string;
  odds: string;
}

const raffles: Raffle[] = [
  {
    title: "Rolex Daytona",
    image: "/images/raffles/rolex-daytona.png",
    price: "$250",
    endDate: "2024-03-01",
    totalTickets: 1000,
    remainingTickets: 456,
    prizeValue: "$45,000",
    tier: "gold",
    description: "Limited Edition Platinum Daytona with custom diamond setting",
    odds: "1 in 1000",
  },
  {
    title: "Luxury Villa in Bali",
    image: "/images/raffles/luxury-villa.png",
    price: "$500",
    endDate: "2024-03-15",
    totalTickets: 2000,
    remainingTickets: 892,
    prizeValue: "$2.5M",
    tier: "silver",
    description: "5-bedroom beachfront villa with private pool and staff",
    odds: "1 in 2000",
  },
  {
    title: "Ferrari F8 Tributo",
    image: "/images/raffles/ferrari-f8.png",
    price: "$1000",
    endDate: "2024-03-30",
    totalTickets: 5000,
    remainingTickets: 2341,
    prizeValue: "$350,000",
    tier: "bronze",
    description: "2023 Model with custom interior and track package",
    odds: "1 in 5000",
  },
];

const tierStyles: Record<Tier, {
  border: string;
  shadow: string;
  glow: string;
}> = {
  gold: {
    border: "ring-2 ring-yellow-500/50",
    shadow: "shadow-yellow-500/20",
    glow: "bg-gradient-to-r from-yellow-300/20 via-yellow-400/20 to-yellow-500/20",
  },
  silver: {
    border: "ring-2 ring-slate-500/50",
    shadow: "shadow-slate-500/20",
    glow: "bg-gradient-to-r from-slate-300/20 via-slate-400/20 to-slate-500/20",
  },
  bronze: {
    border: "ring-2 ring-orange-500/50",
    shadow: "shadow-orange-500/20",
    glow: "bg-gradient-to-r from-orange-300/20 via-orange-400/20 to-orange-500/20",
  },
};

function RaffleCard({ raffle, index }: { raffle: Raffle; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card
        className={`group relative overflow-hidden backdrop-blur-sm bg-white/20 dark:bg-zinc-900/50 hover:shadow-xl transition-all duration-300 h-full ${tierStyles[raffle.tier].border} hover:${tierStyles[raffle.tier].shadow}`}
        onMouseMove={onMouseMove}
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition duration-300"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                350px circle at ${mouseX}px ${mouseY}px,
                rgba(255,255,255,0.1),
                transparent 80%
              )
            `,
          }}
        />
        <div className="relative h-full flex flex-col">
          <div className="relative w-full h-64">
            <Image
              src={raffle.image}
              alt={raffle.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform group-hover:scale-105 duration-300"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${tierStyles[raffle.tier].glow}`} />
            <div className="absolute bottom-2 right-2 bg-black/70 px-3 py-1 rounded-full">
              <span className="text-white font-bold">{raffle.prizeValue}</span>
            </div>
          </div>
          <div className="p-4 flex-1 flex flex-col">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {raffle.title}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4 text-sm flex-1">
              {raffle.description}
            </p>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white/5 p-2 rounded-lg">
                  <div className="flex flex-col">
                    <span className="text-primary font-bold text-lg">
                      {raffle.price}
                    </span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
                      per ticket
                    </span>
                  </div>
                </div>
                <div className="bg-white/5 p-2 rounded-lg">
                  <div className="flex flex-col">
                    <span className="text-zinc-700 dark:text-zinc-300 font-bold">
                      {raffle.odds}
                    </span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
                      winning odds
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 p-2 rounded-lg">
                <div className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">Time Remaining</div>
                <CountdownTimer endDate={raffle.endDate} />
              </div>
              <div>
                <Progress
                  value={(raffle.remainingTickets / raffle.totalTickets) * 100}
                  color="primary"
                  className="mb-1"
                />
                <div className="flex justify-between text-xs text-zinc-500 dark:text-zinc-400">
                  <span>{raffle.remainingTickets} tickets left</span>
                  <span>{raffle.totalTickets} total</span>
                </div>
              </div>
              <Button
                color="primary"
                className={`w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transform group-hover:scale-105 transition-all ${tierStyles[raffle.tier].shadow}`}
                size="lg"
                aria-label={`Enter ${raffle.title} raffle`}
              >
                Enter Raffle
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

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
            <RaffleCard key={index} raffle={raffle} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
