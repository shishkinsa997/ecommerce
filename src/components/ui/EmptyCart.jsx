import Button from '@components/ui/Button';

const EmptyCart = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4 py-16">
      <p className="text-lg text-black/50">Your cart is empty</p>
      <Button variant="primaryLarge">
        Continue Shopping
      </Button>
    </div>
  );
};

export default EmptyCart;