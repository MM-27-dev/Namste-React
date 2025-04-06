//Not using keys (not acceptble) <<< index as key <<<<unique id (best practice)
import RestaurantCard from "./RestaurantCard";
import reslist from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  const [resListState, setResListState] = useState(reslist);


  return (
    <div className="body">
      <div className="Filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("clicked");
            //Filter Logic
            const updatedreslist = resListState.filter(
              (res) => res.avgRating > 4
            );
            // console.log(updatedreslist);
            setResListState(updatedreslist);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-conatiner">
        {/* RestaurantCards */}
        {/* <RestaurantCards resData={reslist[0]} /> */}
        {resListState.map((restaurant, index) => (
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
