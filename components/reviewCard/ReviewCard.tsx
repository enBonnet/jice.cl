const ReviewCard = () => {
  return (
    <div className="container mx-auto bg-white shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300">
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
        <p className="font-normal text-gray-700 mb-4">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <div className="flex justify-end">
          <div className="flex items-center">
            <div className="text-gray-700 text-right mr-2">
              <div className="font-bold">ana_unsplash</div>
              <div>Ana Unsplash</div>
            </div>
            <div>
              <div className="rounded-full max-h-12 w-12 overflow-hidden">
                <img
                  alt="Foto de perfil de Ana"
                  src="https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3584&q=80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
