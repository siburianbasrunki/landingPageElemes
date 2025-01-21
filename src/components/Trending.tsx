import { trendingData } from "@/store/trendingData";
import Image from "next/image";

export const TrendingSection = () => {
  return (
    <div className="container mx-auto ">
      <h1 className="text-3xl text-black font-bold ml-4">
        Browser Our Trending
      </h1>
      <h2 className="text-2xl font-bold text-[#8BAC3E] ml-4">Receipt</h2>
      <div className="flex flex-row flex-wrap">
        {trendingData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-1 p-6 m-4 w-full md:w-[287px] h-[300px] rounded-xl"
            style={{ backgroundColor: item.bgColor }}
          >
            <Image src={item.image} alt={item.name} width={150} height={150} />
            <h1 className="text-2xl font-bold text-black">{item.name}</h1>
            <p className="font-bold text-black">{item.category}</p>
            <p className="font-bold text-black">Rating: {item.star}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-2">
        <button className="bg-[#8BAC3E] text-white py-2 px-4 rounded-full hover:bg-[#7a9835]">
          ALL Receipt
        </button>
      </div>
    </div>
  );
};
