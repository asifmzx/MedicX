const SearchInput = ({
  placeholder = "Search...",
  icon: Icon,
  inputClassName = "",
  wrapperClassName = "",
}) => {
  return (
    <div className={`relative w-full max-w-sm md:max-w-full ${wrapperClassName}`}>

      {Icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
          <Icon className="w-4 h-4" />
        </div>
      )}
      <input
        type="text"
        placeholder={placeholder}
        className={`w-full pl-10 pr-4 py-1 border border-gray-300 rounded ${inputClassName}`}
      />
    </div>
  );
};

export default SearchInput;
