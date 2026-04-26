import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { data } from "@data/products";

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export const formattedPrice = (price, d=0) => {
  const indent = d === 0 ? 3 : 4
  price = price.toFixed(d)

  return price.toString().length > (indent + d)
    ? '$' + price.toString().slice(0, -indent - d) + ',' + price.toString().slice(-indent - d)
    : '$' + price;
}

export const getData = () => {
  const getUniqueValues = (key, array = data) => {
    return Array.from(new Set(array.map((product) => product[key])));
  };

  const filterProducts = (key, value) => {
    return data.filter((product) => product[key] === value);
  };

  const products = {
    all: data,
    tv: filterProducts("category", "tv"),
    phone: filterProducts("category", "phone"),
    laptop: filterProducts("category", "laptop"),
  }
  const brands = {
    all: getUniqueValues("brand"),
    tv: getUniqueValues("brand", products.tv),
    phone: getUniqueValues("brand", products.phone),
    laptop: getUniqueValues("brand", products.laptop),
  }

  return { brands, products };
};
