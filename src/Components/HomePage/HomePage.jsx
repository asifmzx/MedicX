const HomePage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <p className=' text-2xl font-bold'>
          Welcome to
          <span className="text-[#096B68] ps-2">MedicX</span>
        </p>
        <button className='mt-4'>
          <a href="/dashboard" className='bg-[#096B68] text-white px-4 py-2 rounded-lg'>Dashboard</a>
        </button>
      </div>
    </>
  );
};

export default HomePage;
