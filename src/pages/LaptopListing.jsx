import Sidebar from '@components/layout/Sidebar';
import ProductGrid from '@components/common/ProductGrid';

const LaptopListing  = ({ pageType, setPageType, cart, setCart }) => {
  return (
    <>
      <Sidebar />
      <ProductGrid pageType={pageType} />
    </>
  );
}

export default LaptopListing ;