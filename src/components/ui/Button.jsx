import { cn } from '@lib/utils';

const Button = ({
  children,
  className,
  variant = 'primary',
  ...props
}) => {
  const baseStyles = "px-4 text-center rounded-xl transition-colors focus:outline-none";

  const variants = {
    primary: "h-10 bg-black text-white hover:bg-gray-800",
    primaryLarge: "h-12 bg-black text-white hover:bg-gray-800",
    plus: "p-3 bg-black hover:bg-gray-500",
    minus: "p-3 bg-[#ECEEF2] hover:bg-gray-300",
    danger: "p-3 text-[#D4183D] hover:bg-[#D4183D]/10",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;