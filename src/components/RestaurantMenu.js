import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) {
    return <Shimmer />;
  }
  const {
    name = "",
    cuisines,
    costForTwoMessage,
  } = resInfo?.cards[2]?.card?.card?.info;

  const cardItems =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card
      ?.itemCards;

  console.log(cardItems);
  return (
    <div>
      <h1>Restaurant Name: {name} </h1>
      <h2>
        {cuisines.join(",")} - {costForTwoMessage}
      </h2>
      <h2>Menu</h2>
      <ul>
        {cardItems?.map((item) => (
          <li key={item.card?.info?.name}>
            {" "}
            {item.card?.info?.name} - Rs. {item.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
