const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    costForTwo,
    sla: { deliveryTime },
  } = resData?.info || { sla: {} };
  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h3 className="font-bold py-4 text-lg">{name} </h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>Rs. {costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
