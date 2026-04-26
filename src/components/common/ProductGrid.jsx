import { useState } from 'react';
import Dropdown from '@components/ui/Dropdown';
import ProductCard from '@components/common/ProductCard';

const ProductGrid = ({ setCart, cart, filteredProducts }) => {
  const [select, setSelect] = useState('Low to High')
  const sorted = {
    ['Low to High']: (a, b) => a.price - b.price,
    ['High to Low']: (a, b) => b.price - a.price
  }

  const sortedProducts = filteredProducts.sort(sorted[select]);

  return (
    <div className="w-full h-full flex flex-col gap-6">
      <header className="flex gap-2 items-center">
        <p className="text-black/50">
          <span>{filteredProducts.length} </span>
          {filteredProducts.length === 1 ? 'product' : 'products'}
        </p>
        <p className="ml-auto">Sort by:</p>
        <Dropdown
          items={Object.keys(sorted)}
          select={select}
          setSelect={setSelect}
        />
      </header>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} setCart={setCart} cart={cart} {...product}/>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
