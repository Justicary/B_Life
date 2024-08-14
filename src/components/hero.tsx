import Image from "next/image";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const Hero = () => {
  return (
    <section
      id="inicio"
      className="p-2 lg:p-8 flex flex-col lg:flex-row items-center justify-between lg:h-[648px] bg-[#F3F4F6]"
    >
      <div className="order-1 xl:order-none max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]">
        <h1 className="text-5xl font-extrabold mb-4 w-[572px]">
          Grab
          <div className="inline-block relative w-48 h-24 bg-purple-800 rounded-[28px] mx-4 -rotate-2">
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-6xl">
              50%
            </span>
          </div>
          <div>Off Smartphone Collection</div>
        </h1>
        <p
          className={`text-lg text-gray-600 mb-6 w-[426px] ${montserrat.className}`}
        >
          Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus
          vitae leo nunc.
        </p>
        <div className="flex items-center">
          <Image src="/hero1.png" alt="texto" height={112} width={112} />
          <span className="ml-4 w-64 text-2xl font-bold">
            Xiphone 14<div>Edition</div>
          </span>
        </div>
      </div>
      <div className="order-2 lg:order-none lg:w-[740px]">
        <Image
          className="lg:mt-32"
          src="/xiphone.png"
          alt="Xiphone 14"
          height={762.85}
          width={546.42}
        />
      </div>
      <div className="relative lg:absolute lg:top-1/4 lg:left-1/2 lg:translate-y-1/2 lg:-translate-x-1/2 lg:mt-0 order-3 -mt-40">
        <Image src="/hero0.png" alt="texto" height={176} width={215} />
      </div>
    </section>
  );
};
