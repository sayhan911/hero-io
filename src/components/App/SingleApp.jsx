import { FaStar } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { Link } from "react-router";

const App = ({ apps }) => {
  const { image, title, ratingAvg, downloads, id } = apps;
  return (
    <Link to={`/apps/${id}`}>
      <div className="card bg-white shadow-sm rounded-md hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
        <figure className="h-auto w-auto">
          <div className="bg-gray-200 h-72 w-72 m-3 rounded-md flex items-center justify-center">
            <img
              className="w-56 h-auto"
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
    </Link>
  );
};

export default App;
