import Sidebar from '@components/layout/Sidebar';
import ProductGrid from '@components/common/ProductGrid';

const LaptopListing = ({ pageType, setPageType, cart, setCart }) => {
  return (
    <>
      <Sidebar />
      <ProductGrid cart={cart} setCart={setCart} pageType={pageType} setPageType={setPageType} />
    </>
  );
}

export default LaptopListing ;