const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
          Welcome to <span className="text-[#0062ff]">Medic</span>
          <span className="text-[#0062ff] text-5xl">X</span>
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl mb-8">
          Your health companion, simplified and secure.
        </p>
        <a
          href="/home/dashboard"
          className="inline-block bg-[#193768] text-white text-lg px-6 py-3 rounded-xl shadow-lg hover:bg-[#1f4d99] transition-all duration-300"
        >
          Go to Dashboard
        </a>
      </div>
    </div>
  );
};

export default HomePage;
