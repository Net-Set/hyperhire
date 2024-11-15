"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });

import ToasterContext from "../context/ToastContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-[url('/images/bg.png')] bg-cover bg-no-repeat`}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
       
          <Header />
          <ToasterContext />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
