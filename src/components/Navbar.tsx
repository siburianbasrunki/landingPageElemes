import Image from "next/image";
import Icon from "@/Assets/iconElemes.svg";
import { MdMenu } from "react-icons/md";

export const Navbar = () => {
  return (
    <>
      <div className="top-0 left-0 right-0 overflow-visible">
        <div className="p-4 flex justify-between items-center max-w-7xl mx-auto">
          <div>
            <Image src={Icon} alt="icon" height={36} width={150} />
          </div>
          <div className="hidden md:block overflow-visible">
            <ul className="flex gap-4 text-black overflow-visible">
              <li className="hover:text-[#8BAC3E] cursor-pointer">Home</li>
              <li className="hover:text-[#8BAC3E] cursor-pointer">About</li>
              <li className="relative hover:text-[#8BAC3E] cursor-pointer group px-2 ">
                <div className="absolute -top-2 -right-4 z-50 whitespace-nowrap">
                  <span className="text-[10px] font-bold bg-red-500 text-white px-1.5 py-1 rounded-full group-hover:bg-[#8BAC3E]">
                    Hot
                  </span>
                </div>
                Promotions
              </li>
              <li className="hover:text-[#8BAC3E] cursor-pointer">Blogs</li>
              <li className="hover:text-[#8BAC3E] cursor-pointer">
                Contact Us
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <button className="hidden md:block bg-white text-black py-2 px-4 hover:text-[#8BAC3E]">
              Masuk
            </button>
            <button className="bg-[#8BAC3E] text-white py-2 px-4 rounded-full hover:bg-[#7a9835]">
              Daftar Sekarang
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50">
        <div className="flex justify-around py-4">
          <div className="flex flex-col items-center text-black hover:text-[#8BAC3E] cursor-pointer">
            <MdMenu />
            <span className="text-sm">Home</span>
          </div>
          <div className="flex flex-col items-center text-black hover:text-[#8BAC3E] cursor-pointer">
            <MdMenu />
            <span className="text-sm">Promotion</span>
          </div>
          <div className="flex flex-col items-center text-black hover:text-[#8BAC3E] cursor-pointer">
            <MdMenu />
            <span className="text-sm">Other</span>
          </div>
        </div>
      </div>
      <div className="h-16"></div>
    </>
  );
};
