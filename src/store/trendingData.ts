import { StaticImageData } from "next/image";
import Trending from "@/Assets/trending.png";
import Trending1 from "@/Assets/trending2.png";
import Trending2 from "@/Assets/trending3.png";
import Trending3 from "@/Assets/trending4.png";
import Trending4 from "@/Assets/trending5.png";
import Trending5 from "@/Assets/trending6.png";
import Trending6 from "@/Assets/trending7.png";
import Trending7 from "@/Assets/trending8.png";

export interface TrendingItem {
  id: number;
  name: string;
  image: StaticImageData;
  category: string;
  bgColor: string;
  star: number;
}

export const trendingData: TrendingItem[] = [
  {
    id: 1,
    name: "Pizza Paperoni",
    image: Trending,
    category: "Pizza",
    bgColor: "#E6F3F5",
    star: 4,
  },
  {
    id: 2,
    name: "Pizza Meat",
    image: Trending1,
    category: "Pizza",
    bgColor: "#E6F3F5",
    star: 3,
  },
  {
    id: 3,
    name: "Doner Kebab",
    image: Trending2,
    category: "Kebab",
    bgColor: "#EAEEFA",
    star: 5,
  },
  {
    id: 4,
    name: "Salmon Roll",
    image: Trending3,
    category: "Salmon",
    bgColor: "#F9EEF3",
    star: 4,
  },
  {
    id: 5,
    name: "Cupcake Choco",
    image: Trending4,
    category: "Cupcake",
    bgColor: "#F0FEEB",
    star: 4,
  },
  {
    id: 6,
    name: "Doughnut Milk",
    image: Trending5,
    category: "Doughnut",
    bgColor: "#F3F7D9",
    star: 5,
  },
  {
    id: 7,
    name: "Doughnut Unicorn",
    image: Trending6,
    category: "Doughnut",
    bgColor: "#F3F7D9",
    star: 4,
  },
  {
    id: 8,
    name: "Kathi Kebab",
    image: Trending7,
    category: "Kebab",
    bgColor: "#EAEEFA",
    star: 4,
  },
];
