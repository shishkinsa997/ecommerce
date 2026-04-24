import Button from '../ui/Button';
import { formattedPrice } from '@lib/utils';

const OrderSummary = ({ cartProducts, setPageType }) => {
  const subtotal = cartProducts.reduce((acc, x) => acc + (x.count * x.price), 0)
  const tax = subtotal * 0.08
  return (
    <aside className="w-full h-full flex flex-col items-start gap-4 lg:max-w-90 p-6 rounded-xl border-2 border-black/10">
      <h2 className="text-lg/7">Order Summary</h2>
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-3 text-left w-full">
          <div className='flex justify-between w-full'>
            <span className='text-black/50'>Subtotal</span>
            <span>{formattedPrice(subtotal, 2)}</span>
          </div>
          <div className='flex justify-between w-full'>
            <span className='text-black/50'>Tax (8%)</span>
            <span>{formattedPrice(tax, 2)}</span>
          </div>
          <div className='flex justify-between w-full text-black/50'>
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          <span className='w-full border border-black/10'></span>
          <div className='flex justify-between w-full'>
            <span>Total</span>
            <span className='text-lg'>{formattedPrice(subtotal + tax, 2)}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 text-left w-full">
        <Button variant='primaryLarge'>Proceed to Chechout</Button>
        <Button variant='secondaryLarge' onClick={() => setPageType('tv')}>Continue Shopping</Button>
      </div>
    </aside>
  );
}

export default OrderSummary;
