import Image from "next/image";

import AppDemo from "@/components/AppDemo";
import BuiltForDevs from "@/components/BuiltForDevs";
import Hero from "@/components/Hero";
import Products from "@/components/Products";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen overflow-x-hidden flex-col items-center justify-between pt-24">
      <Hero />
      <AppDemo />
      <BuiltForDevs />
      <Products />
    </main>
  );
}
