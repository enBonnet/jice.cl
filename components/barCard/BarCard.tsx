const BarCard = () => {
  return (
    <div className="container mx-auto bg-white shadow-lg rounded max-w-md hover:shadow-2xl transition duration-300">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="https://flowbite.com/docs/images/blog/image-1.jpg"
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p className="font-normal text-gray-700 mb-3">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <div className="flex justify-end">
          <a
            className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded text-sm px-3 py-2 text-center inline-flex items-center"
            href="#"
          >
            Visitar
          </a>
        </div>
      </div>
    </div>
  );
};

export default BarCard;
