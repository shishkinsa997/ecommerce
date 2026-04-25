import { useState } from 'react';
import { getStats } from '@lib/utils';
import Sidebar from '@components/layout/Sidebar';
import ProductGrid from '@components/common/ProductGrid';

const LaptopListing = ({ pageType, setPageType, cart, setCart }) => {
  const [filteredProducts, setFilteredProducts] = useState(getStats().filtered[pageType] || [])
  return (
    <>
      <Sidebar filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts}/>
      <ProductGrid
        cart={cart}
        setCart={setCart}
        pageType={pageType}
        setPageType={setPageType}
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
      />
    </>
  );
}

export default LaptopListing ;