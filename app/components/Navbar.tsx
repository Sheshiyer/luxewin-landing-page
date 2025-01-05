"use client";

import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Raffles", href: "#raffles" },
  { name: "Winners", href: "#winners" },
  { name: "About", href: "#about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 dark:bg-zinc-900/70 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            LUXEWIN
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-zinc-600 dark:text-zinc-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <Button
              isIconOnly
              variant="light"
              onPress={() => setIsMenuOpen(!isMenuOpen)}
              className="z-50"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </Button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button
              className="bg-transparent border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
              variant="bordered"
              size="sm"
              aria-label="Connect wallet"
            >
              Connect Wallet
            </Button>
            <Button
              className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:opacity-90 transition-all"
              size="sm"
              aria-label="Sign in to account"
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.2 }}
        className={`md:hidden fixed inset-x-0 top-16 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-lg shadow-lg ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="p-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-zinc-600 dark:text-zinc-300 hover:text-primary dark:hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-2 flex items-center justify-between border-t border-zinc-200 dark:border-zinc-700">
            <ThemeToggle />
            <div className="flex gap-2">
              <Button
                className="bg-transparent border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
                variant="bordered"
                size="sm"
                aria-label="Connect wallet"
              >
                Connect Wallet
              </Button>
              <Button
                className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:opacity-90 transition-all"
                size="sm"
                aria-label="Sign in to account"
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
