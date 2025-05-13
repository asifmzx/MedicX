const StatusButton = ({ variant = "default", text = "button" }) => {
  const baseStyles =
    "w-[120px] px-4 py-1 rounded-full text-xs font-medium tracking-wide text-center";

  const variants = {
    Confirm:
      "bg-transparent hover:bg-[#3B82F6] border border-[#3B82F6] text-[#3B82F6] hover:text-[#FAFAFA]",
    cancel: "bg-[#FB2C36] hover:bg-[#AB2C16] text-[#FAFAFA]",
    complete: "bg-[#22C55E] hover:bg-[#22a55E] text-[#FAFAFA]",
    default:
      "bg-transparent hover:bg-[#262626] text-[#262626] hover:text-[#FAFAFA] border border-[#262626]",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`}>{text}</button>
  );
};

export default StatusButton;
