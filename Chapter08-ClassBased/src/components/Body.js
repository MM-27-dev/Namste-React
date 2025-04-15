import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [resListState, setResListState] = useState([]); // Original restaurant list
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]); // Filtered restaurant list

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9580069&lng=77.6092188&collection=80475&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const JSON = await data.json();
    console.log(JSON);
    const restaurantArray = JSON?.data?.cards
      .filter(
        (card) =>
          card?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      )
      .map((card) => card?.card?.card?.info);

    setResListState(restaurantArray || []);
    setFilteredRes(restaurantArray || []);
  };

  //Whenever state veriable update, react triggers a reconciliation cycle (re-render the component)
  console.log("Body renders");

  const handleSearch = () => {
    const filteredData = resListState.filter((res) =>
      res?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRes(filteredData);
  };

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-btn"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            console.log("clicked");
            // ✅ Fix: Update filteredRes instead of resListState
            const updatedreslist = resListState.filter(
              (res) => res.avgRating > 4.5
            );
            setFilteredRes(updatedreslist);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {resListState.length > 0 ? (
          filteredRes.map((restaurant) => (
            <Link to={"/restaurants/" + restaurant.id}>
              <RestaurantCard key={restaurant.id} resData={restaurant} />
            </Link>
          ))
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  );
};

export default Body;
