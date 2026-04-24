import EmptyCart from "@components/ui/EmptyCart";
import ProductCardRow from "@components/common/ProductCardRow";
import products from "@data/products"

const Cart = ({ cart, setCart, setPageType }) => {
  const isEmpty = Object.keys(cart).length === 0
  const cartProducts = Object.keys(cart).map(id =>
    products.find(product => product.id === Number(id))
  )
  return (
    <div className="w-full h-full max-w-7xl flex flex-col gap-8">
      <h1 className="text-2xl">Shopping Cart</h1>
      {isEmpty ? <EmptyCart setPageType={setPageType}/> :
      <div className="w-full h-full flex gap-8">
        <div className="w-full h-full flex flex-col flex-1 gap-4">
          {cartProducts.map((product) => (<ProductCardRow key={product.id} setCart={setCart} cart={cart} {...product}/>))}
        </div>
      </div>}
    </div>
  );
}

export default Cart ;