import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-300 border-black border-b-2 flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold ">
                {item.card.info.name}
              </span>
              <span>
                {" "}
                - Rs{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm text-left">{item.card.info.description}</p>
          </div>
          <div className="w-5/12 p-4">
            <div className="absolute  ">
              <button className="p-2 float-left mx-10 rounded-sm text-white shadow-lg bg-black ">
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
