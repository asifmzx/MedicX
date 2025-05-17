const StatusButton = ({ variant = "default", text = "" }) => {
    const baseStyles =
        "w-[90px] p-1 rounded-full text-xs font-medium tracking-wide text-center border mr-1";

    const variants = {
        follow_up: "bg-black text-white",
        urgent: ""

    };

    return (
        <div className={`${baseStyles} ${variants[variant]}`}>{text}</div>
    );
};

export default StatusButton;
