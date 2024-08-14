"use client";
import Lottie from "react-lottie";
import { Montserrat } from "next/font/google";
import { useState, useCallback, useMemo } from "react";
import {
  MdOutlineArrowCircleLeft,
  MdArrowCircleRight,
  MdSpeaker,
  MdShoppingCart,
} from "react-icons/md";
import {
  FaLaptop,
  FaCamera,
  FaMobile,
  FaTv,
  FaCreditCard,
  FaGamepad,
  FaHeart,
} from "react-icons/fa";
import datosAnimacion from "../../data/confeti.json";
import BotonMagico from "./BotonMagico";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const products = [
  {
    id: 1,
    name: "Xiphone 14 Pro Maxe",
    desc: "Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus vitae leo nunc.",
    price: 175.0,
    rating: 5,
    reviews: 121,
  },
  {
    id: 2,
    name: "Xiphone 13",
    desc: "Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus vitae leo nunc.",
    price: 100.0,
    rating: 4,
    reviews: 89,
  },
  {
    id: 3,
    name: "Samsonge",
    desc: "Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus vitae leo nunc.",
    price: 90.0,
    rating: 4,
    reviews: 63,
  },
];

const ProductsNavbar = () => {
  return (
    <div className="flex w-full justify-around px-4 pb-28">
      <IconItem icon={<FaLaptop />} label="Computer & Laptop" />
      <IconItem icon={<FaMobile />} label="Mobile & Phone" />
      <IconItem icon={<FaCamera />} label="Camera" />
      <IconItem icon={<FaTv />} label="TV & Smart Box" />
      <IconItem icon={<FaCreditCard />} label="Home Appliance" />
      <IconItem icon={<MdSpeaker />} label="Accesories" />
      <IconItem icon={<FaGamepad />} label="Other Categories" />
    </div>
  );
};

const IconItem = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => (
  <div className="flex flex-col">
    <div className="flex flex-col justify-center items-center shadow-md w-[84px] h-[84px] rounded-full p-1 bg-white">
      <div className="text-4xl">{icon}</div>
    </div>
    <div className="mt-2 text-lg text-center w-[90px]">{label}</div>
  </div>
);

type Category = {
  name: string;
  count: number;
  selected: boolean;
  color: string;
};

const categorias: Category[] = [
  {
    name: "Computer & Laptop",
    count: 15,
    selected: false,
    color: "bg-gray-800",
  },
  { name: "Mobile & Phone", count: 35, selected: true, color: "bg-lime-500" },
  {
    name: "Camera Imaging",
    count: 10,
    selected: false,
    color: "bg-purple-500",
  },
  { name: "TV & Smart Box", count: 8, selected: false, color: "bg-gray-400" },
  { name: "Home Appliance", count: 2, selected: false, color: "bg-yellow-500" },
];

const CategoryMenu: React.FC = () => {
  return (
    <div className="w-56 py-12">
      <ul className="space-y-4 border-gray-300 border-l-4">
        {categorias.map((category) => (
          <li
            key={category.name}
            className={`flex justify-between items-center p-2 cursor-pointer 
              ${
                category.selected
                  ? "bg-gray-100 border-l-4 border-purple-500 -ml-1"
                  : "hover:bg-purple-200"
              }`}
          >
            <span className={`text-gray-900 text-base ${montserrat.className}`}>
              {category.name}
            </span>
            <span
              className={`text-white text-xs font-bold py-1 px-2 rounded-lg ${category.color}`}
            >
              {category.count}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Products = () => {
  const [agregado, setAgregado] = useState(false);
  const opcionesAnimacion = {
    loop: agregado,
    autoplay: agregado,
    animationData: datosAnimacion,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const fnAlAgregar = useCallback(() => {
    setAgregado(true);
  }, []);

  return (
    <section
      id="productos"
      className="flex flex-col p-0 lg:p-8 items-center bg-gray-50"
    >
      <div className="text-center py-4 pb-10">
        <h1 className="text-7xl font-bold">
          What <span className="text-purple-500">we</span> provide?
        </h1>
      </div>
      <ProductsNavbar />
      <div className="flex w-full justify-between h-14">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8">
          New <span className="text-purple-500">arrival</span> for you
        </h2>
        <div className="hidden lg:flex items-center">
          <MdOutlineArrowCircleLeft size={55} />
          <MdArrowCircleRight size={55} color="lightgreen" />
        </div>
      </div>
      <div className="grid grid-cols-1 mt-4 sm:grid-cols-1 lg:grid-cols-4 gap-2">
        {/* Product Categories */}
        <CategoryMenu />
        {products.map((product) => (
          <div key={product.id} className={`h-[640px] ${montserrat.className}`}>
            <div className="bg-white p-4 h-[360px] rounded-lg shadow-lg mb-4">
              <button className="flex w-full justify-end mb-4">
                <div className="relative w-[49px] h-[49px] items-center justify-center flex bg-black rounded-full">
                  <FaHeart fill="white" size={21} />
                </div>
              </button>
              <div className="bg-[#D9D9D9] h-[267px] rounded-md mb-4"></div>
            </div>
            <div
              className={`absolute bottom-1 left-2 ${
                agregado ? "block" : "block"
              }`}
            >
              {/* Animación confeti */}
              <Lottie options={opcionesAnimacion} />
            </div>
            <h3 className="flex justify-between text-lg font-bold my-4">
              {product.name}
              <span className="text-gray-800 font-bold">
                ${product.price.toFixed(2)}
              </span>
            </h3>
            <p className="text-base my-4">{product.desc}</p>

            <div className="flex items-center">
              <span className="text-green-600 font-bold mr-2">
                {product.rating}
              </span>
              <span className="text-green-500 text-2xl">★★★★★</span>
              <span className="text-lg ml-2 text-gray-600">
                ({product.reviews} reviews)
              </span>
            </div>
            <BotonMagico
              titulo="Add to cart"
              icono={<MdShoppingCart className="mr-2" size={20} />}
              posicion="izquierda"
              alClickear={fnAlAgregar}
              otrasClases="!bg-white !text-black"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
