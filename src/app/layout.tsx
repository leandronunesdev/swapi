import { ReactNode } from "react";
import "./globals.css";
import { Lexend_Deca as LexendDeca } from "next/font/google";
import { Hero, Menu } from "./components";

const lexendDeca = LexendDeca({
  subsets: ["latin"],
  variable: "--font-lexend-deca",
});

export const metadata = {
  title: "Star Wars Wiki",
  description: "Star Wars Wiki created with Next.js and GraphQL",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={lexendDeca.className}>
        <Hero />
        <Menu />
        {children}
      </body>
    </html>
  );
}
