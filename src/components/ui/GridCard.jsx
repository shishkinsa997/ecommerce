import Dropdown from '@components/ui/Dropdown';
import ProductCard from '@components/common/ProductCard';
import { getStats } from '@lib/utils';

const GridCard = () => {
  const tvProducts = getStats().filtered.tv;
  return (
    <div className="w-full h-full flex flex-col gap-6">
      <header className="flex gap-2 items-center">
        <p className="text-black/50">
          <span>{tvProducts.length} </span>
          {tvProducts.length === 1 ? 'product' : 'products'}
        </p>
        <p className="ml-auto">Sort by:</p>
        <Dropdown
          placeholder="Low to High"
          items={['Low to High', 'High to Low']}
        />
      </header>
      <div className="grid grid-cols-4 gap-4">
        {tvProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default GridCard;
