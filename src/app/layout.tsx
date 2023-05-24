import { ReactNode } from "react";
import "./globals.css";
import { Roboto_Flex as Roboto } from "next/font/google";
import { Menu } from "./components";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });

export const metadata = {
  title: "Star Wars Wiki",
  description: "Star Wars Wiki created with Next.js and GraphQL",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
