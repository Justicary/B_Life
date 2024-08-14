import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Montserrat } from "next/font/google";
// import { BtnAlternaTema } from "@/components/btnAlternaTema";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const Header = () => {
  return (
    <header className="p-8 flex justify-between items-center">
      <div className="hidden xl:flex w-[121.08px] h-[19.68px] mr-28">
        <Image src="/s.svg" alt="logo" width={24.43} height={30.79} />
        <Image src="/p.svg" alt="logo" width={23.33} height={30} />
        <Image src="/h.svg" alt="logo" width={26.31} height={30} />
        <Image src="/e.svg" alt="logo" width={20.92} height={30} />
        <Image src="/r.svg" alt="logo" width={24.36} height={30} />
        <Image
          src="/e.svg"
          alt="logo"
          width={20.92}
          height={30}
          className="z-10"
        />
        <div className="-ml-2 -mt-1.5 z-0 w-4 h-3 rounded-full bg-purple-700" />
      </div>
      <nav
        className={`space-x-4 xl:space-x-8 xl:w-[454px] uppercase text-xs ${montserrat.className}`}
      >
        <a href="#inicio" className="text-gray-800 hover:text-purple-700">
          Home
        </a>
        <a href="#productos" className="text-gray-800 hover:text-purple-700">
          Pricing
        </a>
        <a href="#" className="text-gray-800 hover:text-purple-700">
          Events
        </a>
        <a href="#footer" className="text-gray-800 hover:text-purple-700">
          Company
        </a>
      </nav>
      <div className="hidden xl:flex">
        <button className=" text-black py-2 px-4 rounded-md uppercase text-xs">
          Login
        </button>
        <button className="ml-4 bg-black text-white py-4 px-9 rounded-[52px] text-sm">
          Sign Up Now{" "}
          <span className="ml-1 inline-block align-middle">
            <ArrowRight />
          </span>
        </button>
      </div>
    </header>
  );
};
