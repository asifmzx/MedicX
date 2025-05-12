const Container = ({ children, className = "" }) => {
    return (
        <div className={`w-full max-w-[1920px] mx-auto  ${className}`}>
            {children}
        </div>
    );
};