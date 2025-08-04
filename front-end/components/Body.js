import { useState, useEffect } from "react";
import RestorantCard, { EnhanceRestorantCard } from "./RestorantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router";

const Body = () => {
  const isOnline = useOnlineStatus();
  const [restoData, setRestroData] = useState([]);
  const [searchInput, setsearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:3001/swiggy");
      const Json = await data.json();

      setRestroData(
        Json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );

      setFilteredData(
        Json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );

      //Optional Channing help to avoid error in the program it will prevent the entire application crash if the data is not available, it only return undefined
    };
    fetchData();
  }, []);

  if (restoData.length == 0) {
    return <Shimmer />;
  }

  if (!isOnline) {
    return (
      <div className="flex items-center justify-center text-2xl font-extrabold h-screen">
        {" "}
        <h1>
          Looks like you are offline, please check your internet connection
        </h1>
      </div>
    );
  }

  const promotedRestorantCard = EnhanceRestorantCard(RestorantCard);
  return (
    <div className="body pl-70  pr-45">
      <div className="pt-4 flex mt-2 gap-4 mr-20 justify-center items-center">
        <input
          placeholder="Search for Restorant"
          className="border-black border-2 rounded-lg w-70 hover:border-orange-500 focus:outline-none focus:border-orange-500 px-2 "
          onChange={(e) => {
            setsearchInput(e.target.value);
          }}
          type="text"
        ></input>
        <button
          className="bg-orange-400 hover:bg-orange-800 font-bold shadow text-white px-3 py-1 rounded-md "
          onClick={() => {
            let filteredData = restoData.filter((value) =>
              value.info.name
                .toLocaleLowerCase()
                .includes(searchInput.toLocaleLowerCase())
            );

            setFilteredData(filteredData);
          }}
        >
          Search
        </button>
        <button
          className="bg-gray-200 shadow hover:bg-gray-400 font-semibold text-black px-3 py-1 rounded-md"
          onClick={() => {
          
            let TopRated = restoData.filter(
              (value) => value.info.avgRating > 4.3
            );
          

            setFilteredData(TopRated);
          }}
        >
          Top-rated
        </button>
      </div>

      <div className="text-3xl font-bold mb-3">
        <h2>Restorant List</h2>
      </div>

      <div className="flex flex-wrap gap-4 ">
        {filteredData.map((res) => (
          <Link
            className="no-underline"
            key={res.info.id}
            to={"/restorant/" + res.info.id}
          >
            {res.info.promote ? (
              <promotedRestorantCard resData={res} />
            ) : (
              <RestorantCard resData={res} />
            )}
            {/* <RestorantCard resData={res}/> */}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
