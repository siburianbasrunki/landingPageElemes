// import Image from "next/image";

import { Navbar } from "@/components/Navbar";
import Background from "@/Assets/Bg.png";
import { MainPage } from "@/components/Main";
import { Category } from "@/components/Category";
import { TrendingSection } from "@/components/Trending";
import { Footer } from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <div
        className="relative"
        style={{
          backgroundImage: `url(${Background.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "90vh",
        }}
      >
        <Navbar />
        <MainPage />
      </div>
      <section className="py-16 bg-white">
        <Category />
      </section>
      <section className="py-16 bg-white">
        <TrendingSection />
      </section>
      <section className="hidden md:block bg-white">
        <Footer />
      </section>
    </div>
  );
}
