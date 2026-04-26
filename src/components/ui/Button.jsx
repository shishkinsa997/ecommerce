import { cn } from '@lib/utils';

const Button = ({
  children,
  className,
  variant = 'primary',
  ...props
}) => {
  const baseStyles = "px-4 flex items-center justify-center text-center rounded-xl transition-colors focus:outline-none";

  const variants = {
    primary: "h-10 bg-black text-white hover:bg-gray-800",
    primaryLarge: "h-12 bg-black text-white hover:bg-gray-800",
    secondary: "h-10 m-auto bg-white text-black ring ring-gray-200/10 hover:bg-gray-200",
    secondaryLarge: "h-12 bg-white text-black ring ring-black/10 hover:bg-gray-300/50",
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