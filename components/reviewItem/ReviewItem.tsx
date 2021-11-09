import { UserCard } from "components/userCard";

const ReviewItem = () => {
  return (
    <article className="mb-4 pb-4 border-b last:border-b-0 sm:border-b-0 border-gray-400">
      <div className="mb-4">
        <a href="#">
          <img src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
        </a>
      </div>
      <div className="mb-4">
        <a href="#">
          <h4 className="text-gray-900 text-xl tracking-tight mb-2">
            Noteworthy technology acquisitions 2021
          </h4>
        </a>
        <a href="#">
          <p className="text-gray-700 mb-4">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order...{" "}
            <span className="font-bold">Leer más</span>
          </p>
        </a>
      </div>
      <div className="flex justify-end">
        <UserCard />
      </div>
    </article>
  );
};

export default ReviewItem;
