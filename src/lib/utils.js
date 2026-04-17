import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { products } from "@data/products";

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export const getStats = () => {
  const totalProducts = products.length;

  const getUniqueValues = (key) => {
    return Array.from(new Set(products.map((product) => product[key])));
  };
  const categories = getUniqueValues("category");
  const brands = getUniqueValues("brand");
  return { totalProducts, categories, brands };
};
