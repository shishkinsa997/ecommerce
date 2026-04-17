import Dropdown from '@components/ui/Dropdown';

const GridCard = () => {
  return (
    <div className="w-full h-full flex flex-col gap-6">
      <header className="flex gap-2 items-center">
        <p className="text-black/50"><span>8</span> products</p>
        <p className="ml-auto">Sort by:</p>
        <Dropdown
          placeholder="Low to High"
          items={['Low to High', 'High to Low']}
        />
      </header>
      <div className="grid grid-cols-4 gap-4">

      </div>
    </div>
  );
}

export default GridCard;
