import { useState } from 'react';
import { Trash2, Minus, Plus } from 'lucide-react';
import Button from '@components/ui/Button';

const ProductCardRow = ({
  setCart,
  cart,
  ...product
}) => {
  const { id, model, price, images, isSpecialOffer, brand } = product
  const mainImage = images?.[0];

  const [count, setCount] = useState(cart[id]);

  const amount = price * count

  const formattedPrice = amount.toString().length > 3
    ? amount.toString().slice(0, -3) + ',' + amount.toString().slice(-3)
    : amount;


  const handleCart = (action, id) => {
    if (action === 'add') {
      setCount(count + 1);
      setCart(prev => ({
        ...prev,
        [id]: count + 1
      }))
    } else if (action === 'subtract') {
      setCount(Math.max(0, count - 1));
      setCart(prev => {
        if (prev[id] > 1) {
          return {
            ...prev,
            [id]: Math.max(0, count - 1)
          }
        } else {
          const newCart = { ...prev }
          delete newCart[id]
          return newCart
        }
      })
    } else {
      setCount(Math.max(0, count - 1));
      setCart(prev => {
        const newCart = { ...prev }
        delete newCart[id]
        return newCart
      })
    }
  };

  return (
    <article className="w-full p-4 flex gap-4 overflow-hidden rounded-xl border border-black/10 bg-white">
      <div className="grow size-24 min-w-24 aspect-square overflow-hidden">
        <img
          src={mainImage}
          alt={`${brand} ${model}`}
          className="w-full size-24 aspect-square object-cover rounded-xl"
        />
      </div>

      <div className="w-full flex gap-2 justify-between">
        <div className="w-full">
          <p className="text-sm/5 text-gray-500">{brand}</p>
          <h3 className="text-lg mb-2 font-semibold text-black">
            {model}
          </h3>
          <div className='w-32 flex justify-between '>
            <Button onClick={() => handleCart('subtract', id)} variant='minus' className='p-2'>
              <Minus size={16}/>
            </Button>
            <span className='text-center my-auto'>{count}</span>
            <Button onClick={() => handleCart('add', id)} variant='plus' className='p-2'>
              <Plus size={16} color="#fff"/>
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-end justify-between gap-2">
            <Button onClick={() => handleCart('remove', id)} variant='danger'>
              <Trash2 size={20} color="#D4183D"/>
            </Button>
          <p className="text-xl/7 text-gray-900 mb-2">${formattedPrice}</p>
        </div>
      </div>
    </article>
  );
}

export default ProductCardRow