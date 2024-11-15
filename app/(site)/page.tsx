import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";


export const metadata: Metadata = {
  title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",
  description: "This is Home for Solid Pro",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
     
    </main>
  );
}
