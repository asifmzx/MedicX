const Buttonv2 = ({
  variant = "primary",
  text,
  Icon,
  onClick,
  className = "",
  isActive = false,
}) => {
  const baseStyles =
    "px-2 md:px-3 py-2 h-8 flex items-center justify-center rounded-md min-w-0 cursor-pointer";
  const variants = {
    primary:
      "bg-white hover:bg-[#F5F5F5] dark:bg-gray-900 dark:hover:bg-gray-800 text-black dark:text-white text-xs font-semibold",
    secondary:
      "bg-[#0A0A0A] hover:bg-[#262626] dark:bg-gray-700 dark:hover:bg-gray-600 text-[#FAFAFA] dark:text-gray-100 text-xs font-semibold",
    primary_main:
      "bg-[#FFFFFF] hover:bg-[#F5F5F5] dark:bg-gray-900 dark:hover:bg-gray-800 text-black dark:text-white",
    secondary_main:
      "bg-[#0A0A0A] hover:bg-[#262626] dark:bg-gray-700 dark:hover:bg-gray-600 text-[#FAFAFA] dark:text-gray-100",
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${className}
        ${isActive ? "!bg-gray-200 shadow-md" : ""}
        transition-colors duration-200
      `}
    >
      <div className="flex items-center gap-1 md:gap-2 w-full justify-center">
        {Icon && <Icon className="size-4 md:size-5 shrink-0" />}
        {text && <span className="whitespace-nowrap ">{text}</span>}
      </div>
    </button>
  );
};

export default Buttonv2;
