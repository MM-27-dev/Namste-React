import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();

    console.log(json);
    setResInfo(json.data);
  };

    // const { name, city, cuisines, avgRating, costForTwoMessage } =
    //   resInfo?.cards[2]?.card?.card?.info;

  const restaurantInfoCard =
    resInfo?.cards?.find(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    )?.card?.card?.info || {};
  const {
    name,
    city,
    cuisines = [],
    avgRating,
    costForTwoMessage,
  } = restaurantInfoCard;

    // const { itemCards } =
    //   resInfo?.cards?.[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card
    //     ?.itemCards;

const itemCardContainer = resInfo?.cards
  ?.find((card) => card?.groupedCard)
  ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
    (innerCard) => innerCard?.card?.card?.itemCards
  );

const itemCards = itemCardContainer?.card?.card?.itemCards || [];

    console.log(itemCards);

  if (resInfo === null) return <Shimmer />;

  return (
    <div className="menu">
      {/* <h1>
        {
          resInfo?.cards?.find(
            (card) =>
              card?.card?.card?.["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
          )?.card?.card?.info?.name
        }
      </h1> */}

      <h1>{name}</h1>
      <h3>{city}</h3>
      <h3>{cuisines.join(",")}</h3>
      <h3>
        {avgRating} - {costForTwoMessage}
      </h3>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs."}
            {(item.card.info.price || item.card.info.defaultPrice) / 100}
          </li>
        ))}
      </ul>
      {/* <li>{itemCard[0].card.info.name}</li>
        <li>Burger</li>
        <li>Diet Coke</li> */}
    </div>
  );
};

export default RestaurantMenu;
