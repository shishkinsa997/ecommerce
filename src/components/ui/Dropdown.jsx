import { useState, useRef, useEffect } from 'react';
import { cn } from '../../lib/utils';
import { ChevronDown } from 'lucide-react';

const Dropdown = ({
  placeholder = "Options",
  items = [],
  className,
  onSelect,
  ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const baseStyles = "flex flex-1 justify-between rounded-xl flex-auto ring-1 ring-black/10 bg-black/5 focus:outline-none  px-3 py-2";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (item) => {
    onSelect?.(item);
    setIsOpen(false);
  };

  return (
    <div className="relative flex">
    <button
    onClick={toggleDropdown}
    className={cn( baseStyles, className, isOpen && "ring-2 ring-black" )}
    ref={dropdownRef}
    {...props}>
      <span className="text-black/50 mr-auto">{placeholder}</span>

      <ChevronDown
        className="my-auto ml-2 transition-transform duration-200"
        size={16}
        style={{
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
        }}/>
    </button>
          {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 w-full rounded-xl bg-white ring-1 ring-black/10 shadow-lg focus:outline-none overflow-hidden z-50"
          role="menu"
        >
          <div role="none">
            {items.length > 0 ? (
              items.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleSelect(item)}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition-colors duration-150"
                  role="menuitem"
                >
                  {item.label || item}
                </button>
              ))
            ) : (
              <div className="px-4 py-2 text-sm text-gray-500">No options available</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
