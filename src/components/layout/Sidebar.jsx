import { useState } from 'react';
import { getData } from '@lib/utils';
import DropDown from '@components/ui/DropDown';
import Button from '@components/ui/Button';
import Banner from '@components/ui/Banner';
import WeatherWidget from './WeatherWidget';

const Sidebar = ({ pageType, setFilteredProducts }) => {
  const [select, setSelect] = useState('Select brand')
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(5000)
  const [showBanner, setShowBanner] = useState(true)
  const [showWidget, setShowWidget] = useState(true);

  const brands = ['All brands', ...getData().brands[pageType]]
  const allProducts = getData().products[pageType]

  const applyFilters = () => {
      setFilteredProducts(prev => {
        let list = allProducts
        list = list.filter((x) => {
          return x.price >= Number(min) && x.price <= Number(max)
        })
        if (select === 'All brands' || select === 'Select brand') {
          return list
        } else {
          return list.filter((x) => {
            return x.brand === select
          })
        }
      })
  }

  return (
    <aside className="max-w-full w-full h-full flex flex-col items-start gap-4 lg:max-w-64">
      <div className='w-full h-full flex flex-col items-start gap-4 p-4 rounded-xl border-2 border-black/10'>
        <h2 className="text-lg/7">Filters</h2>
        <div className="flex flex-col gap-6 w-full">
          <div className=" flex flex-col gap-2 text-left w-full">
            <h3>Brand</h3>
            <DropDown
              placeholder="Select brand"
              items={brands}
              select={select}
              setSelect={setSelect}
            />
          </div>
          <div className="flex flex-col gap-2 text-left w-full">
            <h3>Price Range</h3>
            <div className='flex justify-between gap-2'>
              <input type='number' onChange={(e) => setMin(Number(e.target.value))} className='max-w-[48%] flex-1 rounded-xl ring-1 ring-black/10 bg-black/5 focus:outline-none px-3 py-2' placeholder='0'/>
              <input type='number' onChange={(e) => setMax(Number(e.target.value) || 5000)} className='max-w-[48%] flex-1 rounded-xl ring-1 ring-black/10 bg-black/5 focus:outline-none px-3 py-2' placeholder='5000'/>
            </div>
          </div>
          <Button variant='primary' onClick={applyFilters}>Apply Filters</Button>
        </div>
      </div>
      {showBanner && <Banner setShowBanner={setShowBanner}/>}
      {showWidget && (
        <WeatherWidget onClose={() => setShowWidget(false)} />
      )}
    </aside>
  );
}

export default Sidebar;
