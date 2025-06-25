const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
          Welcome to <span className="text-[#14837f]">Medic</span>
          <span className="text-[#14837f] text-5xl">X</span>
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl mb-8">
          Your health companion, simplified and secure.
        </p>
        
      </div>
    </div>
  );
};

export default HomePage;
