import React from "react";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearItem, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearItem());
  };


  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-4 bg-black text-white rounded"
          onClick={handleClearCart}
        >
          {" "}
          Clear Cart
        </button>
        

        {cartItems.length === 0 ? (
          <h1>No Items in the cart</h1>
        ) : (
          <ItemList items={cartItems} showRemoveItem={true}/>
        )}
      </div>
    </div>
  );
};

export default Cart;
