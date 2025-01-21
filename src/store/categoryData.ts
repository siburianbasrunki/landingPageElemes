import { StaticImageData } from "next/image";
import CupCake from "@/Assets/Cupcake.svg";
import Pizza from "@/Assets/pizza.svg";
import Kebab from "@/Assets/kebab.svg";
import Salmon from "@/Assets/salmon.svg";
import Doughnut from "@/Assets/doughnut.svg";

export interface CategoryItem {
  id: number;
  name: string;
  countItem: number;
  image: StaticImageData;
  bgColor: string;
}

export const categoryData: CategoryItem[] = [
  {
    id: 1,
    name: "Cupcake",
    countItem: 22,
    image: CupCake,
    bgColor: "#F0FEEB",
  },
  {
    id: 2,
    name: "Pizza",
    countItem: 25,
    image: Pizza,
    bgColor: "#E4F2F4",
  },
  {
    id: 3,
    name: "Kebab",
    countItem: 12,
    image: Kebab,
    bgColor: "#EAEEFA",
  },
  {
    id: 4,
    name: "Salmon",
    countItem: 22,
    image: Salmon,
    bgColor: "#F9EEF3",
  },
  {
    id: 5,
    name: "Doughnut",
    countItem: 11,
    image: Doughnut,
    bgColor: "#F3F7D9",
  },
];
