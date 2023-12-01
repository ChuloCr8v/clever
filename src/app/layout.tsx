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
import ThemeSwitch from "./components/ThemeSwtich";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
