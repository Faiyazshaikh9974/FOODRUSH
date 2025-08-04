const MenuList = ({list, rating})=>{

    return (<div>{list.map((itemCard) => {
              let { name, price, description, imageId, defaultPrice
  } = itemCard.card.info;
    return (
                <div
                  key={itemCard.card.info.id}
                  className="border-b-1 flex border-b-gray-300"
                >
                  <div className="w-full relative">
                    <h2 className="font-bold text-lg text-gray-800 mt-4">
                      {name}
                    </h2>
                    {price? <p className="font-bold">₹ {price / 100}</p>: <p className="font-bold">₹ {defaultPrice/100}</p> }
                    <p className="mt-1 font-bold">⭐ {rating}</p>
                    <div className=" w-full flex items-center justify-between gap-50 mb-3 " >
                      <p className=" line-clamp-3
                      ">{description}</p>
                      
                       
                      <img
                        className="w-28 h-28 object-cover rounded-2xl"
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/${imageId}`}
                        alt={name}
                      />
                      
                      <p className="absolute rounded-2xl shadow left-168 bottom-[3.9px] px-5 py-1 font-bold bg-white text-green-600">ADD</p>
                   
                    </div>
                  </div>
                </div>
              );
            })}
            </div>)
}


export default MenuList;