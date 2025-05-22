const AppointmentStatus = ({ variant = "default", text = "", className = "" }) => {
    const baseStyles =
        "inline-flex items-center justify-center p-1 rounded-full text-xs font-semibold tracking-wide text-center border border-gray-300";

    const variants = {

        default: "bg-white text-gray-800 w-[100px]",
        tomorrow: "bg-[#dbebff] text-[#145efc] border border-[#145efc] w-[85px]",

    };

    return (
        <span className={`${baseStyles} ${variants[variant]} ${className}`}>
            {text}
        </span>
    );
};

export default AppointmentStatus;
