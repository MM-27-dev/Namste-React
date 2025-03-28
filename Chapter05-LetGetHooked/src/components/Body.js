//Not using keys (not acceptble) <<< index as key <<<<unique id (best practice)
import RestaurantCard from "./RestaurantCard";
import reslist from "../utils/mockData";



const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-conatiner">
        {/* RestaurantCards */}
        {/* <RestaurantCards resData={reslist[0]} /> */}
        {reslist.map((restaurant, index) => (
          <RestaurantCard
            key={restaurant.id}
            resData={restaurant}
          ></RestaurantCard>
        ))}
        {/* <RestaurantCards resName="KFC0" cuisine="Burger, Fast Food" /> */}
      </div>
    </div>
  );
};

export default Body;
