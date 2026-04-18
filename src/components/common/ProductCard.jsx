import { useState } from 'react';
import { getStats } from '@lib/utils';
import { Heart, Minus, Plus } from 'lucide-react';
import Button from '@components/ui/Button';

console.log(getStats());
const ProductCard = ({
  model,
  price,
  images,
  isSpecialOffer,
  brand,
}) => {
  const mainImage = images?.[0];

  const formattedPrice = price.toString().length > 3
    ? price.toString().slice(0, -3) + ',' + price.toString().slice(-3)
    : price;

  const [isFavorite, handleFavorite] = useState(false);

  const toggleFavorite = () => {handleFavorite(!isFavorite)};

  const [count, setCount] = useState(0);

  const handleCart = (calc) => {
    if (calc === 'add') {
      setCount(count + 1);
    } else if (calc === 'subtract') {
      setCount(Math.max(0, count - 1));
    }
  };

  return (
    <article className="group w-full max-w-66 overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={mainImage}
          alt={`${brand} ${model}`}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />

        {isSpecialOffer && (
          <span className="absolute left-2 top-2 rounded-md bg-[#D4183D] px-3 py-1 text-xs/4 text-white">
            Special Offer
          </span>
        )}
        { isFavorite
        ?
        <button onClick={toggleFavorite}
        className="absolute right-2 top-2 rounded-xl bg-[#D4183D] p-2 text-black">
          <Heart size={16} color="#fff" fill="#fff"/>
        </button>
        :
        <button onClick={toggleFavorite}
        className="absolute right-2 top-2 rounded-xl bg-white p-2 text-black
          opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Heart size={16} color="#000" fill="#fff"/>
        </button>
        }
      </div>

      <div className="flex flex-col gap-1 p-4">
        <p className="text-sm/5 text-gray-500">{brand}</p>
        <h3 className="h-13 line-clamp-2 text-lg font-semibold text-black">
          {model}
        </h3>
        <p className="text-xl/7 text-gray-900">${formattedPrice}</p>

        <div className="flex items-center justify-between gap-2">
          { count === 0
          ?
            <Button onClick={() => handleCart('add')} variant='primary' className='flex-1'>Add to Cart</Button>
          :
            <>
            <Button onClick={() => handleCart('subtract')} variant='minus' className=''>
              <Minus size={16}/>
            </Button>
            <span>
              <span>{count} </span>
              in cart
            </span>
            <Button onClick={() => handleCart('add')} variant='plus' className=''>
              <Plus size={16} color="#fff"/>
            </Button>
            </>
          }
        </div>
      </div>
    </article>
  );
}

export default ProductCard