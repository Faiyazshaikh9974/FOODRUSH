import { Link } from "react-router";
import { FcApproval } from "react-icons/fc";
import { FcHighPriority } from "react-icons/fc";

import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const isOnline = useOnlineStatus();
  return (
    <div className="lg:flex justify-between bg-gray-50 shadow-lg items-center pl-65  pr-60 ">
      <div className="">
        <Link to="/">
          <img 
            src="https://img.freepik.com/premium-vector/restaurant-logo-design_636083-178.jpg"
            alt=""
            className="w-25  mix-blend-multiply"
          ></img>
        </Link>
      </div>

      <div className="MenuLinks">
        <ul className="flex gap-6 ">
          <li className="px-4 hover:text-orange-500 text-lg font-medium">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:text-orange-500 text-lg font-medium">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 hover:text-orange-500 text-lg font-medium">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="px-4 hover:text-orange-500 text-lg font-medium">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 hover:text-orange-500 text-lg font-medium">
            <Link to="/login">Login</Link>
          </li>
          <li className="px-3 flex items-center gap-2 hover:text-orange-500 text-lg font-medium">
            {isOnline ? (
              <>
                Online <FcApproval />
              </>
            ) : (
              <>
                Offline <FcHighPriority />
              </>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
