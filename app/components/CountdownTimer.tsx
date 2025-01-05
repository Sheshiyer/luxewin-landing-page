"use client";

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  endDate: string;
}

export function CountdownTimer({ endDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const end = new Date(endDate).getTime();
      const distance = end - now;

      if (distance < 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      };
    };

    // Set initial time
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <div className="flex gap-1.5 text-sm">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div
          key={unit}
          className="flex flex-col items-center bg-gradient-to-b from-white/10 to-white/5 dark:from-zinc-800/50 dark:to-zinc-900/50 backdrop-blur-sm rounded-lg px-2 py-1 min-w-[48px] border border-white/10 dark:border-zinc-800"
        >
          <span className="font-bold text-base bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {value.toString().padStart(2, "0")}
          </span>
          <span className="text-[10px] uppercase tracking-wider opacity-70">
            {unit}
          </span>
        </div>
      ))}
    </div>
  );
}
