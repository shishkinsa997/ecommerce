import Sidebar from '@components/layout/Sidebar';
import ProductGrid from '@components/common/ProductGrid';

const TvListing  = ({ pageType, setPageType, cart, setCart }) => {
  return (
    <>
      <Sidebar />
      <ProductGrid pageType={pageType} />
    </>
  );
}

export default TvListing ;