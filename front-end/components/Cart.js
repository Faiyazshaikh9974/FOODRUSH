import { addSameItem, clearItems, removeItem } from "../utils/cart_Slice.js";
import MenuList from "./MenuList.js";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state?.cart?.value);
  {
    console.log(cartItems);
  }
  return (
    <div className="flex h-screen mt-5 justify-center ">
      <div className="border-gray-200  border-1 w-full mx-100 rounded-lg flex flex-col items-start gap-1 shadow-xl  ">
        <h2 className="font-bold text-2xl self-center mt-8 ">
          Your Cart ({cartItems.length}){" "}
        </h2>
        <button
          className="self-center px-3 py-1 bg-gray-300 rounded-xl text-black "
          onClick={() => {
            dispatch(clearItems());
          }}
        >
          Clear Cart
        </button>
        {!cartItems.length && (
          <h2 className="self-center mt-5 text-gray-300">Your Cart is Empty</h2>
        )}

        {cartItems.map((items, index) => {
          const { name, id, finalPrice, rattings, price, description, defaultPrice } =
            items.card.info;
          return (
            <div className="flex flex-col m-2 border-1 border-black" key={index}>
              <div className="flex gap-3 justify-center px-10">
                <p>{name}</p>
                {price ? (
                <p className="font-bold">₹ {price / 100}</p>
              ) : (
                <p className="font-bold">₹ {defaultPrice / 100}</p>
              )}

                <button
                  className="px-3 py-1 bg-red-400 text-white rounded-lg "
                  onClick={() => {
                    dispatch(removeItem(index));
                  }}
                >
                  Delete
                </button>
              </div>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
