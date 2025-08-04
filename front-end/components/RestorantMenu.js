import { useParams } from "react-router";
import useRestorantMenu from "../utils/useRestrorantMenu";
import RestorantCardCategory from "./RestorantCardCategory";
import Loader from "./Loader";
import React, { useState } from "react";
import MenuItemContext from "../utils/MenuItemContext";
const RestroantMenu = () => {
  let { restroId } = useParams();

  const [showIndex, setshowIndex] = useState(0);

  const RestroData = useRestorantMenu(restroId); //custome hook that fetches restaurant menu data

  //check if RestroData is Available or not if not then Return Loading ... or shimmer UI
  if (!RestroData || RestroData.length === 0) {
    return <Loader />;
  }

  const restaurantInfoCard = RestroData.find(
    (items) => items.card?.card?.info?.name
  );

  const info = restaurantInfoCard?.card?.card?.info;

  //check if Info is not Available then return Info Not Available

  if (!info) {
    return <h1>Restaurant Info Not Available</h1>;
  }

  const category = RestroData[5].groupedCard.cardGroupMap.REGULAR.cards.filter(
    (items) =>
      items.card?.card?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  const {
    name,
    areaName,
    avgRating,
    costForTwoMessage,
    totalRatingsString,
    cuisines,
  } = info;

  return (
    <div className="flex my-10 px-auto w-1/2  flex-col  mx-auto gap-2 cursor-pointer">
      <h1 className="font-bold text-2xl pt-2 ">{name}</h1>
      <div className="border-gray-100 p-3 w-full shadow-xl  rounded-2xl ">
        <p className="my-2 font-bold">
          {avgRating} ⭐({totalRatingsString}) • {costForTwoMessage}
        </p>
        <p className="underline text-orange-600 font-bold">
          {cuisines.join(" , ")}
        </p>
        <div>
          <p className="px-1 mt-2 ">
            <span className="font-bold">• Outlet:</span> {areaName}
          </p>
          <p className="px-1 py-1 font-bold">• 20-30 mins</p>
        </div>
      </div>
      {/* provider is used to parse the state to Child Compoenent using Context. */}
      <MenuItemContext.Provider value={{ showIndex, setshowIndex }}>
        {category.map((list, index) => (
          <RestorantCardCategory
            list={list}
            rating={avgRating}
            key={list.card.card.title}
            showMenuItems={index == showIndex ? true : false}
            index={index}
            setshowIndex={() => setshowIndex(index)}
          />
        ))}
      </MenuItemContext.Provider>
    </div>
  );
};

export default RestroantMenu;
