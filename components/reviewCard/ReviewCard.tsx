import { UserCard } from "components/userCard";

const ReviewCard = () => {
  return (
    <article className="container mx-auto bg-white shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300">
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
          <UserCard />
        </div>
      </div>
    </article>
  );
};

export default ReviewCard;
