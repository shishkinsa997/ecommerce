import { Clock  } from 'lucide-react';

const Banner = () => {
  return (
    <div className="relative p-4 w-full text-sm h-full rounded-xl text-white bg-linear-to-r from-[#D4183D] to-[#D4183D]/80">
      <div className="flex flex-col">
        <div className='flex items-center gap-2 mb-2'>
          <Clock />
          <h3 className="text-lg">Special Deal!</h3>
        </div>
        <p className='max-w-50'>
          Register now to unlock exclusive offers and discounts
        </p>
        <div className='flex justify-between items-end'>
          <span>Offer expires in:</span>
          <span className='font-bold'>00:59:59</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;