import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Providers } from "../../redux/Providers";
import Skills from "./components/Skills";
import "./globals.css";
import Header from "./layout/Header";
import ThemeProvider from "./provider";
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
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            <Skills />
            {children}
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
