import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import MenuList from "./MenuList";
import { useContext } from "react";
import MenuItemContext from "../utils/MenuItemContext";
// import { useState } from "react";

const RestorantCardCategory = ({ list, rating, index }) => {
  const { showIndex, setshowIndex } = useContext(MenuItemContext);

  let isOpen = index == showIndex;
  const handleClick = () => {
    setshowIndex(index);
    setshowIndex(isOpen ? null : index);
  };

  // if(ListData) {var
  //    filterData = ListData.filter((data)=> data?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")};

  return (
    <>
      <div className="w-full mt-3 border-b-10 rounded mb-2  border-b-gray-100">
        <div
          onClick={handleClick}
          className="font-bold text-2xl flex justify-between hover:shadow-2xl"
        >
          {list.card.card.title} ({list.card.card.itemCards.length})
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>

        {isOpen && <MenuList list={list.card.card.itemCards} rating={rating} />}

        {/* {showItems &&
          list.card.card.itemCards.map((itemCard) => {
            let { name, price, description, imageId, defaultPrice } =
              itemCard.card.info;
            return (
              <div
                key={itemCard.card.info.id}
                className="border-b-1 flex border-b-gray-300"
              >
                <div className="w-full relative">
                  <h2 className="font-bold text-lg text-gray-800 mt-4">
                    {name}
                  </h2>
                  {price ? (
                    <p className="font-bold">₹ {price / 100}</p>
                  ) : (
                    <p className="font-bold">₹ {defaultPrice / 100}</p>
                  )}
                  <p className="mt-1 font-bold">⭐ {rating}</p>
                  <div className=" w-full flex items-center justify-between gap-50 mb-3 ">
                    <p
                      className=" line-clamp-3
                      "
                    >
                      {description}
                    </p>

                    <img
                      className="w-28 h-28 object-cover rounded-2xl"
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/${imageId}`}
                      alt={name}
                    />

                    <p className="absolute rounded-2xl shadow left-168 bottom-[3.9px] px-5 py-1 font-bold bg-white text-green-600">
                      ADD
                    </p>
                  </div>
                </div>
              </div>
            );
          })} */}
      </div>
    </>
  );
};

export default RestorantCardCategory;
