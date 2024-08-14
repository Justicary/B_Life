import Image from "next/image";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";
import { Products } from "@/components/products";

export default function Home() {
  return (
    <main className="relative z-0 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-2">
      <div className="max-w-7xl w-full">
        <Header />
        <Hero />
        <Products />
        <Footer />
      </div>
    </main>
  );
}
