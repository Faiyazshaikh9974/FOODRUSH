import { Link } from "react-router";
import { FcApproval } from "react-icons/fc";
import { FcHighPriority } from "react-icons/fc";
import { Increament, Decrement } from "../utils/Cart_Slice";
import { useSelector, useDispatch } from 'react-redux';

import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {

  // Adjust the selector based on your actual Redux state structure
  // For example, if your cart slice looks like { cart: { value: 0 } }, this is correct.
  // If your cart slice looks like { cart: { items: [], totalCount: 0 } }, use state.cart.totalCount or similar.
  const count = useSelector((state) => state?.cart?.value);
  const dispatch = useDispatch();
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
            <Link to="/grocery">Grocery</Link>
          </li>
          
          <li className="px-4 hover:text-orange-500 text-lg font-medium">
            <Link to="/login">Login</Link>
          </li>
          <li className="px-4 hover:text-orange-500 text-lg font-medium">
            <Link to="/cart">Cart<sup className="bg-red-500 text-white rounded-full px-2 py-1 ml-1">{count.length}</sup></Link>
          </li>
          {/* <li className="px-3 flex items-center gap-2 hover:text-orange-500 text-lg font-medium">
            {isOnline ? (
              <>
                Online <FcApproval />
              </>
            ) : (
              <>
                Offline <FcHighPriority />
              </>
            )}
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
