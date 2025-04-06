import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {

  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        alt="res-logo"
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} star</h4>
      <h4> {sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
