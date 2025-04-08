import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  const [btnName, setBtnName] = useState("login");

  // If no dependency array ->useEffect is called on every render
  //If dependency array is empty -> useEffect is called on initil render(Just Once)
  //If dependency array is [btnName] -> useEffect called everytime btnName is updated
  useEffect(() => {
    console.log("UseEffect called");
  }, [btnName]);

  
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact US</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() =>
              btnName === "login" ? setBtnName("logout") : setBtnName("login")
            }
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
