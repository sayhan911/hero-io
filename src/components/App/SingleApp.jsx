import { FaStar } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";

const App = ({ apps }) => {
  const { image, title, ratingAvg, downloads } = apps;
  return (
    <div className="card bg-white shadow-sm rounded-md hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
      <figure className="h-auto w-auto">
        <div className="bg-gray-200 w-full h-full m-3 mt-8 rounded-md flex items-center justify-center">
          <img
            className="w-40 sm:w-48 md:w-56 lg:w-60 h-auto"
            src={image}
            alt="Apps"
          />
        </div>
      </figure>
      <h2 className="card-title m-3">{title}</h2>
      <div className="flex justify-between m-3 mt-0">
        <span className="text-center text-[#00d390] bg-[#F1F5E8] px-3 py-1 rounded-sm flex items-center justify-center gap-1">
          <HiOutlineDownload />
          {downloads}M
        </span>
        <span className="text-center text-[#FF8813] bg-[#FFF0E1] px-3 py-1 rounded-sm flex items-center justify-center gap-1">
          <FaStar />
          {ratingAvg}
        </span>
      </div>
    </div>
  );
};

export default App;
