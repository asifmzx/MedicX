const Button = ({ variant = "primary", text = "button" }) => {
  const baseStyles = "px-2 py-2 rounded text-xs font-medium";
  const variants = {
    primary: "bg-[#FFFFFF] hover:bg-[#F5F5F5] text-black",
    secondary: "bg-[#0A0A0A] hover:bg-[#262626] text-[#FAFAFA] ",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`}>
      <div className="flex items-center space-x-1">{text}</div>
    </button>
  );
};

export default Button;
