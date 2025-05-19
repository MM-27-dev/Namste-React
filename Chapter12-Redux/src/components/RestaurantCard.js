import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData;
   const {loggedInUser} = useContext(UserContext)
  return (
    <div className="m-4 p-4 w-[300px] bg-gray-100 hover:bg-gray-200">
      <img
        alt="res-logo"
        className="rounded-lg h-[200px] w-[300px]"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} star</h4>
      <h4> {sla.deliveryTime} minutes  </h4>
      <h4> User :  {loggedInUser} </h4>
    </div>
  );
};

//Hogher Order Componet

//input  - RestaurantCard => RestaurantCardPromoted

export const withPromtedLable = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-8 p-2 rounded">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};

export default RestaurantCard;
