"use client";

import { Button } from "@nextui-org/react";
import { HeroSection } from "./components/HeroSection";
import { FeaturedRaffles } from "./components/FeaturedRaffles";
import { PastWinners } from "./components/PastWinners";
import { AboutSection } from "./components/AboutSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturedRaffles />
      <PastWinners />
      <AboutSection />

      {/* Final CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-500 to-secondary bg-300% animate-gradient-slow" />
        
        {/* Overlay pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2)_0%,transparent_100%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-heading">
              Ready to Win Your Dream Prize?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join thousands of winners worldwide on ElitePrize
            </p>
            <Button
              size="lg"
              className="font-bold text-lg bg-white text-primary hover:bg-white/90 transform hover:scale-105 transition-all shadow-xl hover:shadow-2xl backdrop-blur-sm"
              aria-label="Enter raffle now"
            >
              Enter Now!
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#F8F8F8] dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">About ElitePrize</h3>
              <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                Making luxury dreams accessible through fair and transparent raffles.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Button variant="light" className="p-0 hover:text-primary transition-colors" aria-label="Learn how it works">How It Works</Button></li>
                <li><Button variant="light" className="p-0 hover:text-primary transition-colors" aria-label="View available raffles">Available Raffles</Button></li>
                <li><Button variant="light" className="p-0 hover:text-primary transition-colors" aria-label="See past winners">Past Winners</Button></li>
                <li><Button variant="light" className="p-0 hover:text-primary transition-colors" aria-label="Read FAQ">FAQ</Button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Button variant="light" className="p-0 hover:text-primary transition-colors" aria-label="Read terms of service">Terms of Service</Button></li>
                <li><Button variant="light" className="p-0 hover:text-primary transition-colors" aria-label="View privacy policy">Privacy Policy</Button></li>
                <li><Button variant="light" className="p-0 hover:text-primary transition-colors" aria-label="Read refund policy">Refund Policy</Button></li>
                <li><Button variant="light" className="p-0 hover:text-primary transition-colors" aria-label="View license information">License Info</Button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-300">
                <li>support@eliteprize.com</li>
                <li>+1 (555) 123-4567</li>
                <li>Mon-Fri: 9AM-6PM EST</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-600 dark:text-zinc-300">
              © {new Date().getFullYear()} ElitePrize. All rights reserved.
            </p>
            <div className="flex gap-4">
              {/* Social Media Icons - Replace with actual icons */}
              {[
                { name: 'Facebook', icon: 'facebook' },
                { name: 'Twitter', icon: 'twitter' },
                { name: 'Instagram', icon: 'instagram' },
                { name: 'LinkedIn', icon: 'linkedin' }
              ].map((social, i) => (
                <Button
                  key={i}
                  className="w-8 h-8 min-w-0 rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-primary/20 dark:hover:bg-primary/40 transition-colors p-0"
                  aria-label={`Follow us on ${social.name}`}
                  isIconOnly
                />
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
