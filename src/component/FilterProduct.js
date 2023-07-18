import React from "react";
import { GiConverseShoe } from "react-icons/gi";

const FilterProduct = ({category, onClick}) => {
  return (
    <div onClick={onClick}>
      <div className="text-3xl p-5 bg-sky-500 rounded-full cursor-pointer">
        <GiConverseShoe />
      </div>
      <p className="text-center font-medium my-1 capitalize">{category}</p>
    </div>
  ); 
};

export default FilterProduct;
