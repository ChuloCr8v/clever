import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Providers } from "../../redux/Providers";
import Skills from "./components/Skills";
import "./globals.css";
import Header from "./layout/Header";
import ThemeProvider from "./provider";

// Font
const raleway = Raleway({
  subsets: ["latin"], // 👈 required for preloading
  variable: "--font-raleway",
  display: "swap", // optional but recommended
});

export const metadata: Metadata = {
  title: "Bonaventure. FrontEnd Developer | Javascript | Typescript",
  description:
    "I am Nkematu Bonaventure, a frontend-focused full-stack developer with over 5 years of experience building modern web and mobile applications. I specialize in crafting intuitive user interfaces while also architecting scalable backends.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={raleway.variable}>
      <body
        className={twMerge(
          "bg-gray-100 dark:bg-gray-800 font-[var(--font-raleway)]"
        )}
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
