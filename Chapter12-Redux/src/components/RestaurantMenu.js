import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";
import React, { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

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
  // ?.itemCards;

  const itemCardContainer = resInfo?.cards
    ?.find((card) => card?.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
      (innerCard) => innerCard?.card?.card?.itemCards
    );

  const itemCards = itemCardContainer?.card?.card?.itemCards || [];



  if (resInfo === null) return <Shimmer />;

  const catagories = resInfo?.cards
    ?.find((card) => card?.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

 

  return (
    <div className="text-center">
      {/* <h1>
        {
          resInfo?.cards?.find(
            (card) =>
              card?.card?.card?.["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
          )?.card?.card?.info?.name
        }
      </h1> */}

      <h1 className="font-bold my-5 text-2xl">{name}</h1>

      <h3 className="font-bold text-lg">{city}</h3>
      <h3 className="font-bold text-lg">{cuisines.join(",")}</h3>
      <h3 className="font-bold text-lg">
        Rating {avgRating} - {costForTwoMessage}
      </h3>

      {/* Catagories accordions */}
      {catagories.map((catagory, index) => (
        //Controlled Component
        <ResCategory
          key={catagory.card.card.title}
          data={catagory.card.card}
          showItem={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
