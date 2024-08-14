import Image from "next/image";
import Link from "next/link";
import { MdEmail, MdPhone } from "react-icons/md";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const Footer = () => {
  return (
    <footer
      id="footer"
      className={`text-black items-center pt-10 pb-10 ${montserrat.className}`}
    >
      <div className="container flex flex-col lg:flex-row lg:justify-between">
        <div>
          <div className="flex lg:w-[189.45px] lg:h-[30.79px] lg:mr-28">
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
            <div className="-ml-3 -mt-2.5 z-0 w-[27px] h-[27px] rounded-full bg-purple-700" />
          </div>
          <p className="lg:w-[381px] lg:my-4 my-8">
            Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus
            vitae leo nunc.
          </p>
        </div>
        <div className="lg:space-y-2 my-4">
          <h4 className="font-bold">Company</h4>
          <ul>
            <li>
              <Link className="hover:text-purple-700" href="#">
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-purple-700" href="#">
                Products Digital
              </Link>
            </li>
            <li>
              <Link className="hover:text-purple-700" href="#">
                Customer Reviews
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:space-y-2 my-4">
          <h4 className="font-bold">Information</h4>
          <ul>
            <li>
              <Link className="hover:text-purple-700" href="#">
                Help Center
              </Link>
            </li>
            <li>
              <Link className="hover:text-purple-700" href="#">
                Payment Methods
              </Link>
            </li>
            <li>
              <Link className="hover:text-purple-700" href="#">
                Return & Refund
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:space-y-2 my-4">
          <h4 className="font-bold">Contact</h4>
          <ul>
            <li className="flex items-center">
              <MdPhone className="mr-2" />
              (+1) 123-456-7890
            </li>
            <li className="flex items-center">
              <MdEmail className="mr-2" />
              <Link className="hover:text-purple-700" href="#">
                email@youremail.com
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
