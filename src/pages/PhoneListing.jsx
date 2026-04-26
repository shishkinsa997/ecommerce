import { useState } from 'react';
import { getData } from '@lib/utils';
import Sidebar from '@components/layout/Sidebar';
import ProductGrid from '@components/common/ProductGrid';

const PhoneListing = ({ pageType, setPageType, cart, setCart }) => {
  const [filteredProducts, setFilteredProducts] = useState(getData().products[pageType] || [])
  return (
    <>
      <Sidebar pageType={pageType} filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts}/>
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

export default PhoneListing ;