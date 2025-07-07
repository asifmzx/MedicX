const Button = ({
  variant = "primary",
  text = "button",
  Icon,
  onClick,
  className = "",
}) => {
  const baseStyles =
    "px-2 py-2 rounded text-xs font-medium transition-colors duration-200 ";
  const variants = {
    primary:
      "bg-white hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 text-black dark:text-white border border-gray-200 dark:border-gray-600",
    secondary:
      "bg-black hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white dark:text-gray-100",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <div className="flex items-center justify-center space-x-1">
        {Icon && <Icon className="w-4 h-4" />}
        <span>{text}</span>
      </div>
    </button>
  );
};

export default Button;
