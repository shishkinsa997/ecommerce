import { ShoppingCart, User } from 'lucide-react';
const Header = () => {
  return (
    <header className="sticky top-0 mx-auto w-full after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black/10 after:content-['']">
      <div className="max-w-360 mx-auto px-8 py-4 flex items-center justify-between">
          <nav className="flex items-center gap-8">
            <a href="/tv" className="text-[24px]/8">TechStore</a>
            <ul className="flex items-center gap-6 text-gray-500">
              <li><a href="/tv" className="text-black">TV</a></li>
              <li><a href="/phone">Phone</a></li>
              <li><a href="/laptop">Laptop</a></li>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <button className="flex items-center justify-center size-9"><ShoppingCart /></button>
            <button className="flex items-center justify-center size-9"><User /></button>
          </div>
      </div>
    </header>
  );
}

export default Header;