import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElemnt-Js Object => HTML Element (when we render it)

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact US</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCards = ({ resData }) => {
  console.log(resData);

  const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } =
    resData;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        alt="res-logo"
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} star</h4>
      <h4> {deliveryTime} minutes</h4>
    </div>
  );
};

// const resObj =  {
// info: {
// id: "3241",
// name: "Meghana Foods",
// cloudinaryImageId: "iivuhjc2mswi9lublktf",
// locality: "Residency Road",
// areaName: "Residency Road",
// costForTwo: "₹500 for two",
// cuisines: [
// "Biryani",
// "Andhra",
// "South Indian",
// "Chinese",
// "Seafood"
// ],
// avgRating: 4.7,
// parentId: "635",
// avgRatingString: "4.7",
// totalRatingsString: "83K+",
// sla: {
// deliveryTime: 29,
// lastMileTravel: 2.4,
// serviceability: "SERVICEABLE",
// slaString: "25-30 mins",
// lastMileTravelString: "2.4 km",
// iconType: "ICON_TYPE_EMPTY"
// },
// availability: {
// nextCloseTime: "2025-03-24 23:59:00",
// opened: true
// },
// badges: {
// imageBadges: [
// {
// imageId: "Rxawards/_CATEGORY-Biryani.png",
// description: "Delivery!"
// }
// ]
// },
// isOpen: true,
// aggregatedDiscountInfoV2: { },
// type: "F",
// badgesV2: {
// entityBadges: {
// textBased: { },
// imageBased: {
// badgeObject: [
// {
// attributes: {
// imageId: "Rxawards/_CATEGORY-Biryani.png",
// description: "Delivery!"
// }
// }
// ]
// },
// textExtendedBadges: { }
// }
// },
// orderabilityCommunication: {
// title: { },
// subTitle: { },
// message: { },
// customIcon: { },
// commsStyling: { }
// },
// differentiatedUi: {
// displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
// differentiatedUiMediaDetails: {
// mediaType: "ADS_MEDIA_ENUM_IMAGE",
// lottie: { },
// video: { }
// }
// },
// reviewsSummary: { },
// displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
// restaurantOfferPresentationInfo: { },
// externalRatings: {
// aggregatedRating: {
// rating: "4.3",
// ratingCount: "21K+"
// },
// source: "GOOGLE",
// sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
// },
// ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
// },
// analytics: { },
// cta: {
// link: "swiggy://menu?restaurant_id=3241&source=collection&query=Biryani",
// text: "RESTAURANT_MENU",
// type: "DEEPLINK"
// },
// widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
// }

const reslist = [
  {
    id: "67890",
    name: "KFC",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/87a05c2f-b366-4efc-99ec-9938e0510568_686427.JPG",
    cuisines: ["Fried Chicken", "Fast Food"],
    avgRating: "4.5",
    sla: { deliveryTime: 25 },
  },
  {
    id: "12345",
    name: "Ibaco",
    cloudinaryImageId: "kyllhajjzwkzagnskpx6",
    cuisines: ["Pizza", "Italian"],
    avgRating: "4.7",
    sla: { deliveryTime: 30 },
  },

  {
    id: "631211",
    name: "Domino's Pizza",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/7/ccf02c59-edba-46b0-aff9-f3deacba54dd_631211.JPG",
    cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
    avgRating: "4.2",
    sla: { deliveryTime: 23 },
  },
  {
    id: "508890",
    name: "IC Ice Creams",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/10/b6dfd4f6-80ac-4180-890b-d4ad70366d27_508890.JPG",
    cuisines: ["Ice Cream", "Desserts"],
    avgRating: "4.6",
    sla: { deliveryTime: 26 },
  },
];

//Not using keys (not acceptble) <<< index as key <<<<unique id (best practice)

const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-conatiner">
        {/* RestaurantCards */}
        {/* <RestaurantCards resData={reslist[0]} /> */}
        {reslist.map((restaurant, index) => (
          <RestaurantCards
            key={restaurant.id}
            resData={restaurant}
          ></RestaurantCards>
        ))}
        {/* <RestaurantCards resName="KFC0" cuisine="Burger, Fast Food" /> */}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      <Body />
      {/* Body 
      Footer */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
