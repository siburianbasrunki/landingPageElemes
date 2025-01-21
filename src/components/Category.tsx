import { categoryData } from "@/store/categoryData";
import Image from "next/image";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

export const Category = () => {
  return (
    <div className="container mx-auto ">
      <h1 className="text-3xl text-black font-bold ml-4">
        Browser Our Category
      </h1>
      <h2 className="text-2xl font-bold text-[#8BAC3E] ml-4">Receipt</h2>

      <div className="relative mt-6 ml-4">
        <div className="flex overflow-x-auto gap-4 md:grid md:grid-cols-5 md:gap-8 pb-4 md:pb-0 no-scrollbar">
          {categoryData.map((item) => (
            <div
              key={item.id}
              className="category-card flex-shrink-0 w-48 md:w-full flex flex-col items-center gap-4 p-4 rounded-xl shadow-md transition-transform duration-300"
              style={{ backgroundColor: item.bgColor }}
            >
              <Image src={item.image} alt={item.name} />
              <div className="flex flex-col items-center">
                <h1 className="text-xl font-bold text-black">{item.name}</h1>
                <p className="text-black text-lg">{item.countItem} Items</p>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:flex gap-4 items-center mt-6 justify-end">
          <div className="flex flex-row items-center bg-[#8BAC3E] text-white p-2 rounded-full cursor-pointer">
            <div className="bg-white rounded-full flex items-center justify-center">
              <MdNavigateBefore className="text-lg text-black" />
            </div>
            <button className="ml-2">Prev</button>
          </div>

          <div className="flex flex-row items-center bg-[#8BAC3E] text-white p-2 rounded-full cursor-pointer">
            <button className="mr-2">Next</button>
            <div className="bg-white rounded-full flex items-center justify-center">
              <MdNavigateNext className="text-lg text-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
