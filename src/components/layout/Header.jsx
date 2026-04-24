import { useState, useEffect } from 'react';
import { ShoppingCart, User } from 'lucide-react';
import { cn } from '@lib/utils';
import Link from "../ui/Link";

const Header = ({ cart }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const activeStyle = 'text-black max-sm:border-b-3 max-sm:border-black'
  const underlineStyle = 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black/10 after:content-[""]'
  const cartCount = (
    <span className='absolute -top-1 -right-1 ring rounded-full size-5 text-center text-sm text-white bg-black'>{Object.keys(cart).length}</span>
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
        <li className='flex-1'><Link href="/tv" variant="header" className={activeStyle}>TV</Link></li>
        <li className='flex-1'><Link href="/phone" variant="header">Phone</Link></li>
        <li className='flex-1'><Link href="/laptop" variant="header">Laptop</Link></li>
      </ul>
    </nav>
  );
  return (
    <>
    <header className={cn(
          "sticky z-1 top-0 mx-auto w-full max-sm:pb-3 bg-white",
          underlineStyle
        )}>
      <div className="max-w-360 mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/tv" className="text-[24px]/8">TechStore</a>
            {!isMobile && nav}
          </div>
          <div className="flex items-center gap-4">
            <Link variant="headerIcon" className='relative'>{Object.keys(cart).length > 0 && cartCount}<ShoppingCart /></Link>
            <Link variant="headerIcon"><User /></Link>
          </div>
      </div>
    </header>
    {isMobile && nav}
    </>
  );
}

export default Header;