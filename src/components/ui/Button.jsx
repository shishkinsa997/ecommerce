import { cn } from '../../lib/utils';

const Button = ({
  children,
  className,
  variant = 'primary',
  ...props
}) => {
  const baseStyles = "px-4 text-center rounded-xl transition-colors focus:outline-none";

  const variants = {
    primary: "h-10 bg-black text-white hover:bg-gray-800",
    outline: "border border-gray-300 bg-transparent hover:bg-gray-500",
    danger: "bg-red-600 text-white hover:bg-red-700 ",
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