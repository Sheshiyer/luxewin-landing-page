import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import { Providers } from "./providers";
import { ThemeToggle } from "./components/ThemeToggle";
import { Navbar } from "./components/Navbar";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "ELITEPRIZE - Premium Luxury Raffles & Giveaways",
  description: "Enter exclusive raffles to win luxury watches, cars, homes, and more. Fair, transparent, and fully licensed platform.",
  keywords: "luxury raffles, win luxury items, luxury giveaways, luxury watches, luxury cars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${openSans.variable} font-sans antialiased`} suppressHydrationWarning>
        <Providers>
          <Navbar />
          {children}
          <ThemeToggle />
        </Providers>
      </body>
    </html>
  );
}
