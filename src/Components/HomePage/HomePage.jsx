import Header from "../Shared/Header/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-white dark:from-black dark:to-gray-900 transition-colors duration-300">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-4 transition-colors duration-300">
            Welcome to{" "}
            <span className="text-[#14837f] dark:text-emerald-400">Medic</span>
            <span className="text-[#14837f] dark:text-emerald-400 text-5xl">
              X
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl mb-8 transition-colors duration-300">
            Your health companion, simplified and secure.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
