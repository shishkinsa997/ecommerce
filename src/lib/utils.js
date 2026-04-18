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

  const filterProducts = (key, value) => {
    return products.filter((product) => product[key] === value);
  };

  const categories = getUniqueValues("category");
  const brands = getUniqueValues("brand");

  const values = {
    categories,
    brands,
  };

  const tvProducts = filterProducts("category", "tv");
  const phoneProducts = filterProducts("category", "phone");
  const laptopProducts = filterProducts("category", "laptop");

  const filtered = {
    tv: tvProducts,
    phone: phoneProducts,
    laptop: laptopProducts,
  }

  return { totalProducts, values, filtered };
};
