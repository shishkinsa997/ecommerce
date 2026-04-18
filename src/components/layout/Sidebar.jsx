import { getStats } from '@lib/utils';
import DropDown from '@components/ui/DropDown';
import Button from '../ui/Button';
import Banner from '../ui/Banner';

const Sidebar = () => {

  return (
    <aside className="max-w-full w-full h-full flex flex-col items-start gap-4 lg:max-w-64">
      <div className='w-full h-full flex flex-col items-start gap-4 p-4 rounded-xl border-2 border-black/10'>
        <h2 className="text-lg/7">Filters</h2>
        <div className="flex flex-col gap-6 w-full">
          <div className=" flex flex-col gap-2 text-left w-full">
            <h3>Brand</h3>
            <DropDown
              placeholder="Select brand"
              items={  [...getStats().values.brands]}
            />
          </div>
          <div className="flex flex-col gap-2 text-left w-full">
            <h3>Price Range</h3>
            <div className='flex justify-between gap-2'>
              <input type='number' className='max-w-[48%] flex-1 rounded-xl ring-1 ring-black/10 bg-black/5 focus:outline-none px-3 py-2' placeholder='0'/>
              <input type='number' className='max-w-[48%] flex-1 rounded-xl ring-1 ring-black/10 bg-black/5 focus:outline-none px-3 py-2' placeholder='5000'/>
            </div>
          </div>
          <Button variant='primary' className=''>Apply Filters</Button>
        </div>
      </div>
      <Banner />
    </aside>
  );
}

export default Sidebar;
