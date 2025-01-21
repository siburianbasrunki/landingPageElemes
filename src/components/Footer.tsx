import Icon from "@/Assets/iconElemes.svg";
import Image from "next/image";
import { BsTelephone } from "react-icons/bs";
import { CiInstagram } from "react-icons/ci";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <div className="container mx-auto hidden md:block">
      <footer className="footer bg-[#F9FFF6] text-base-content p-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        <nav className="flex flex-col items-start">
          <Image className="footer-title" src={Icon} alt="icon" />
          <p>
            Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan
            Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950
          </p>
          <div className="flex flex-row gap-2 items-center ">
            <div className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-[#8BAC3E]">
              <MdEmail className="text-2xl text-black" />
            </div>
            <div className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-[#8BAC3E]">
              <BsTelephone className="text-xl text-black" />
            </div>
            <div className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-[#8BAC3E]">
              <CiInstagram className="text-2xl text-black" />
            </div>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title">Categories</h6>
          <p className="link link-hover">Cupcake</p>
          <p className="link link-hover">Pizza</p>
          <p className="link link-hover">Kebab</p>
          <p className="link link-hover">Salmon</p>
          <p className="link link-hover">Doughnut</p>
        </nav>
        <nav>
          <h6 className="footer-title">About Us</h6>
          <p className="link link-hover">About us</p>
          <p className="link link-hover">FAQ</p>
          <p className="link link-hover">Report Problem</p>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <p>Get now free 50% discount for all products on your first order</p>
          <fieldset className="form-control w-full">
            <div className="join">
              <input
                type="text"
                placeholder="your email address"
                className="input input-bordered  join-item input-md w-full"
                style={{ border: "1px solid black" }}
              />
              <button
                className="btn  join-item btn-md text-white"
                style={{ backgroundColor: "#8BAC3E" }}
              >
                SEND
              </button>
            </div>
          </fieldset>
          <div className="flex flex-row gap-2 items-center ">
            <div className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-[#8BAC3E]">
              <MdEmail className="text-2xl text-black" />
            </div>
            <p>Elemesgroup@gmail.com</p>
          </div>
          <div className="flex flex-row gap-2 items-center ">
            <div className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-[#8BAC3E]">
              <BsTelephone className="text-xl text-black" />
            </div>
            <p>+62 812-3456-7890</p>
          </div>
        </form>
      </footer>
      <p className="flex justify-center items-center p-8 text-[#757575]">
        © 2021 Elemes id. All rights reserved
      </p>
    </div>
  );
};
