import { cn } from '@lib/utils';

const Link = ({
  children,
  href = "#",
  className,
  variant,
  setPageType,
  ...props
}) => {
  const baseStyles = "text-md/6 text-black/50";

  const variants = {
    header: "block text-center items-center my-auto w-full max-sm:text-md/10 max-sm:h-10",
    headerIcon: "flex items-center justify-center size-9 text-black",
  };

  const handleClick = (e) => {
    if (setPageType) {
      e.preventDefault()
      setPageType(href.slice(1))
    }
  }

  return (
    <a href={href}
    onClick={handleClick}
      className={cn(
        baseStyles,
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;