import EmptyCart from "@components/ui/EmptyCart";

const Cart = ({ cart, setCart, pageType, setPageType }) => {
  return (
    <div className="w-full h-full max-w-7xl flex flex-col gap-8">
      <h1 className="text-2xl">Shopping Cart</h1>
      <EmptyCart />
    </div>
  );
}

export default Cart ;