const Hero = () => {
  return (
    <div
      className="w-full bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1498804103079-a6351b050096?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3687&q=80')",
        height: "calc(100vh - 65px)",
      }}
    >
      <div className="w-full h-full bg-opacity-50 blur-sm bg-black flex justify-center items-center relative">
        <div className="mx-4 text-center text-white">
          <h1 className="font-bold text-6xl mb-4">This is a test</h1>
          <h2 className="font-bold text-3xl mb-12">This is a test</h2>
        </div>
        <div className="absolute bottom-14">
          <a
            href=""
            className="border-2 border-white rounded-md font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-yellow-500 hover:text-white mr-6"
          >
            Cerca de mi
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
