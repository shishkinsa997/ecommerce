import { useState, useEffect } from 'react';
import { ShoppingCart, User } from 'lucide-react';
import { cn } from '@lib/utils';
import Link from "../ui/Link";

const Header = ({ setPageType, pageType, cart }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const activeStyle = 'text-black max-sm:border-b-3 max-sm:border-black'
  const underlineStyle = 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black/10 after:content-[""]'
  let count = Object.values(cart).reduce((acc, x) => acc + x, 0)

  const cartCount = (
    <span className='absolute -top-1 -right-1 ring rounded-full size-5 text-center text-[0.7rem]/5 text-white bg-black'>{count}</span>
  )

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);
  }, []);
  const nav = (
    <nav className={cn(
      'relative bg-white w-full mx-auto max-sm:px-4'
      , isMobile ? underlineStyle : null
    )}>
      <ul className="flex items-center justify-between w-full gap-6 text-gray-500 max-sm:gap-4 max-sm:py-3">
        <li className='flex-1'>
          <Link href="/tv" variant="header" className={pageType === 'tv' ? activeStyle : null} setPageType={setPageType}>
            TV
          </Link>
        </li>
        <li className='flex-1'>
          <Link href="/phone" variant="header" className={pageType === 'phone' ? activeStyle : null} setPageType={setPageType}>
            Phone
          </Link>
        </li>
        <li className='flex-1'>
          <Link href="/laptop" variant="header" className={pageType === 'laptop' ? activeStyle : null} setPageType={setPageType}>
            Laptop
          </Link>
        </li>
      </ul>
    </nav>
  );
  return (
    <>
    <header className={cn(
          "sticky z-1 top-0 mx-auto w-full max-sm:pb-3 bg-white",
          underlineStyle
        )}>
      <div className="max-w-360 mx-auto px-8 py-4 max-lg:px-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/tv" className="text-[24px]/8 text-black" setPageType={setPageType}>TechStore</Link>
            {!isMobile && nav}
          </div>
          <div className="flex items-center gap-4">
            <Link href="/cart" variant="headerIcon" className='relative' setPageType={setPageType}>
              {count > 0 && cartCount}<ShoppingCart />
            </Link>
            <Link href="/user" variant="headerIcon" setPageType={setPageType}>
              <User />
            </Link>
          </div>
      </div>
    </header>
    {isMobile && nav}
    </>
  );
}

export default Header;