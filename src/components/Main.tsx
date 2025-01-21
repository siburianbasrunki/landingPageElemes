import mainImage from "@/Assets/mainImage.png";
import imagePreview from "@/Assets/imagePreview.png";
import Image from "next/image";

export const MainPage = () => {
  return (
    <div className="container mx-auto">
      <div className="max-w-7xl mx-auto p-8 md:p-2 mt-8 ">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
          <div className="flex flex-col gap-6 md:max-w-[50%]">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="block text-[#8BAC3E]">Good Food Us</span>
              <span className="block text-[#8BAC3E]">Good Mood</span>
            </h1>

            <p className="text-gray-600 leading-relaxed max-w-[480px]">
              I would think that conserving our natural resources
              <br className="hidden md:block" />
              should be a conservative position: Not to waste food,
              <br className="hidden md:block" />
              and not to throw away a lot of the food that we buy.
            </p>

            <div className="flex gap-4 mt-2">
              <button className="bg-[#8BAC3E] text-white py-3 px-6 rounded-full hover:bg-[#7a9835] transition-colors shadow-2xl">
                Daftar Sekarang
              </button>
              <button className="bg-gray-200 text-gray-700 py-3 px-6 rounded-full hover:bg-gray-300 transition-colors">
                About Us
              </button>
            </div>
          </div>

          <div className="relative w-full md:w-[400px] h-[400px] mb-16 md:mb-0">
            <div className="relative z-10">
              <Image
                src={mainImage}
                alt="mainImage"
                height={400}
                className="w-full h-auto md:max-w-[400px] md:ml-auto"
              />
            </div>

            <div className="absolute left-0 bottom-[-2rem] md:bottom-[-2rem] z-20 transform md:translate-x-[-20%]">
              <Image
                src={imagePreview}
                alt="imagePreview"
                height={93}
                width={292}
                className="w-[250px] md:w-[292px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
