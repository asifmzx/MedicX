export const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full max-w-[1920px] mx-auto transition-colors duration-300 ${className}`}
    >
      {children}
    </div>
  );
};
