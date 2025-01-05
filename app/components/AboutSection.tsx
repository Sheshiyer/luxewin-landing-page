"use client";
import React from "react";
import { Card } from "@nextui-org/react";
import { motion } from "framer-motion";
import { ShieldCheckIcon, TrophyIcon, LockClosedIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

const guarantees = [
  {
    title: "100% Authentic Products",
    description: "Every luxury item is verified and certified by authorized dealers",
    icon: ShieldCheckIcon,
  },
  {
    title: "Secure Transactions",
    description: "Bank-grade encryption and security for all financial transactions",
    icon: LockClosedIcon,
  },
  {
    title: "Fair & Transparent",
    description: "Blockchain-verified draws with complete winner transparency",
    icon: TrophyIcon,
  },
  {
    title: "Money-Back Guarantee",
    description: "Full refund if any prize is not delivered as described",
    icon: CurrencyDollarIcon,
  },
];

export function AboutSection() {
  return (
    <section className="py-section bg-bg-light dark:bg-background relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-secondary/5 animate-gradient-slow" />
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-br from-primary via-purple-500 to-secondary bg-clip-text text-transparent font-heading">
              About luxewin
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-300 mb-6">
              luxewin was founded with a simple mission: to make luxury dreams accessible to everyone through fair and transparent raffles.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6">
              Since our inception, we&apos;ve delivered over $50 million worth of luxury prizes to winners worldwide, maintaining a perfect track record of authenticity and customer satisfaction.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white dark:bg-zinc-900 p-4 rounded-lg text-center hover:shadow-md transition-all">
                <p className="text-3xl font-bold bg-gradient-to-br from-primary to-purple-500 bg-clip-text text-transparent">5+</p>
                <p className="text-zinc-600 dark:text-zinc-300">Years Experience</p>
              </div>
              <div className="bg-white dark:bg-zinc-900 p-4 rounded-lg text-center hover:shadow-md transition-all">
                <p className="text-3xl font-bold bg-gradient-to-br from-purple-500 to-secondary bg-clip-text text-transparent">50k+</p>
                <p className="text-zinc-600 dark:text-zinc-300">Happy Customers</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {guarantees.map((guarantee, index) => (
              <Card
                key={index}
                className="p-6 backdrop-blur-sm bg-white/20 dark:bg-zinc-900/50 hover:shadow-xl transition-all group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <guarantee.icon className="w-12 h-12 bg-gradient-to-br from-primary to-secondary p-2 rounded-lg text-white mb-4" />
                <h3 className="text-xl font-bold mb-2">{guarantee.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-300">{guarantee.description}</p>
              </Card>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 font-heading bg-gradient-to-br from-primary via-purple-500 to-secondary bg-clip-text text-transparent">Our Partners & Certifications</h3>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            {/* Replace with actual partner logos */}
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="w-32 h-12 bg-zinc-200 dark:bg-zinc-800 rounded hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors" />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
