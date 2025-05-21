import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("login");

  // If no dependency array ->useEffect is called on every render
  //If dependency array is empty -> useEffect is called on initil render(Just Once)
  //If dependency array is [btnName] -> useEffect called everytime btnName is updated
  useEffect(() => {
    console.log("UseEffect called");
  }, [btnName]);

  const onlineStatus = useOnlineStatus();

  const data = useContext(UserContext);
  console.log(data);

  // Subscribing to the store using Selector - is a hook in the react
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100 lg:bg-green-100">
      <div className="logo-container">
        <img className="w-52" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">Online status : {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/"> Home </Link>
          </li>
          <li className="px-4">
            <Link to="/about"> About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact US </Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart ({cartItems.length} item)</Link>
          </li>
          <button
            className="login"
            onClick={() =>
              btnName === "login" ? setBtnName("logout") : setBtnName("login")
            }
          >
            {btnName}
          </button>
          <li className="px-4 font-bold">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
