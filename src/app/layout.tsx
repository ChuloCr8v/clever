import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Header from "./layout/Header";
import Skills from "./components/Skills";
import { PersistGate } from "redux-persist/integration/react";
import { Providers } from "../../redux/Providers";
import { persistor } from "../../redux/store";
import ThemeProvider from "./provider";
// import ThemeSwitch from "./components/ThemeSwtich";
import { twMerge } from "tailwind-merge";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bonaventure. FrontEnd Developer | Javascript | Typescript",
  description:
    "I am Nkematu Bonaventure, a frontend developer with a passion for crafting exceptional user interfaces and experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(inter.className, " bg-gray-100 dark:bg-gray-800 ")}
      >
        <Providers>
          {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
          <Header />
          <Skills />

          {children}
          {/* </ThemeProvider> */}
        </Providers>
      </body>
    </html>
  );
}
