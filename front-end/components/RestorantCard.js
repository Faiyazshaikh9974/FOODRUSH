const RestorantCard = (props) => {
  let {
    name,
    sla,
    deliveryTime,
    cuisines,
    costForTwo,
    img,
    areaName,
    cloudinaryImageId,
    filter,
    avgRating,
  } = props.resData.info;
  return (
    <div className="w-48 bg-gray-100 rounded-lg">
      <img
        className="w-56 h-36 rounded-t-lg bg-gray-100 "
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/${cloudinaryImageId}`}
      />
      <div className=" p-2">
        <div className="res-title-time">
          <h3 className="font-bold">{name}</h3>
        </div>
        <h4>
          ★ {avgRating} • {sla.slaString}
        </h4>
        <p className="delivery-time"></p>

        <p style={{ wordWrap: "break-word", whiteSpace: "pre-wrap" }}>
          {cuisines.join(",")}
        </p>

        <div className="explore-price">
          <p className="average-price">{costForTwo}</p>
        </div>
      </div>
    </div>
  );

  //Hight order Restorant Card...
  //Take the input of the Restrorant Card
  //Output will be Restorant Card Promoted..
};

export const EnhanceRestorantCard = (RestorantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestorantCard {...props} />
      </div>
    );
  };
};

export default RestorantCard;
