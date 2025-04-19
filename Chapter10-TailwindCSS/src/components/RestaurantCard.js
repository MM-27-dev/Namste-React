import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData;

  return (
    <div
      className="m-4 p-4 w-[300px] bg-gray-100 hover:bg-gray-200"
      
    >
      <img
        alt="res-logo"
        className="rounded-lg h-[200px] w-[300px]"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} star</h4>
      <h4> {sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
