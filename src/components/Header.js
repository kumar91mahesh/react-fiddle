import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);
  const cartItems = useSelector((state)=> state.cart.items);
  return (
    <div className="flex justify-between shadow-lg">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4">
          <li className="px-4">online status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="px-4">
            <Link to={"/contact"}> Contact Us </Link>
          </li>
          <li className="px-4">
            <Link to={"/grocery"}> Grocery </Link>
          </li>
          <li className="px-4 text-xl">
            <Link to={"/cart"}> Cart- ({cartItems.length} items) </Link>
          </li>
          <li className="px-4">
            <button
              className="login"
              onClick={() => {
                btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
