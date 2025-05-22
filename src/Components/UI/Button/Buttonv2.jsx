const Buttonv2 = ({
  variant = "primary",
  text,
  Icon,
  onClick,
  className = "",
  isActive = false,
}) => {
  // Added min-w-0 to prevent flex overflow issues
  const baseStyles =
    "px-2 md:px-3 py-2 h-8 flex items-center justify-center rounded-md min-w-0";

  // Modified variants to work better with custom widths
  const variants = {
    primary: "bg-black/10 hover:bg-[#F5F5F5] text-black text-xs font-semibold",
    secondary:
      "bg-[#0A0A0A] hover:bg-[#262626] text-[#FAFAFA] text-xs font-semibold",
    primary_main: "bg-[#FFFFFF] hover:bg-[#F5F5F5] text-black",
    secondary_main: "bg-[#0A0A0A] hover:bg-[#262626] text-[#FAFAFA]",
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${className}
        ${isActive ? "!bg-white shadow-sm" : ""}
        transition-colors duration-200
      `}
    >
      <div className="flex items-center gap-1 md:gap-2 w-full justify-center">
        {Icon && <Icon className="size-4 md:w-4 md:h-4 shrink-0" />}
        {text && <span className="whitespace-nowrap ">{text}</span>}
      </div>
    </button>
  );
};

export default Buttonv2;
