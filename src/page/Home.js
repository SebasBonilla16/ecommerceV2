import React, { useState, useEffect } from "react";
import HomeCard from "../component/HomeCard";
import { useSelector } from "react-redux";
import CardFeature from "../component/CardFeature";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import FilterProduct from "../component/FilterProduct";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  const homeProductCartList = productData.slice(0, 3);
  const homeProductCartListTrendingNow = productData.filter(
    (el) =>
      el.category === "Nike Dunks" ||
      el.category === "Air Jordan" ||
      el.category === "Boots" ||
      el.category === "Crocs" ||
      el.category === "Yeezy"
  );

  const categoryList = [...new Set(productData.map((el) => el.category))];

  //filter data display
  const [filterby, setFilterBy] = useState("");
  const [dataFilter, setDataFilter] = useState([]);

  useEffect(() =>{
    setDataFilter(productData)
  },[productData])

  const handleFilterProduct = (category) =>{
    const filter = productData.filter(
        el => el.category.toLowerCase() === category.toLowerCase())
      ;
      setDataFilter([...filter]);
  }

  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 py-2">
        <div className="w-1/2">
          <h2 className="text-4xl md:text-7xl font-bold py-3">
            Freshen up your style: <br />
            <span className="text-sky-600 text-">
              Happy Feet Co. Your Ultimate Shoe Destination
            </span>
          </h2>
          <p className="py-3 text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button className="font-bold bg-sky-600 text-slate-200 px-4 py-2 rounded-md">
            Order Now!
          </button>
        </div>

        <div className="w-1/2 flex flex-wrap gap-5 p-4 justify-center">
          {homeProductCartList.map((el) => (
            <HomeCard
              key={el._id}
              image={el.image}
              name={el.name}
              price={el.price}
              category={el.category}
            />
          ))}
        </div>
      </div>

      <div className="">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-amber-600 mb-4 underline">
            Trending Now
          </h2>
          <div className="ml-auto gap-4">
            <button className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded">
              <GrPrevious />
            </button>
            <button className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded">
              <GrNext />
            </button>
          </div>
        </div>
        <div className="flex gap-5 overflow-scroll scrollbar-none">
          {homeProductCartListTrendingNow.map((el) => (
            <CardFeature
              key={el._id}
              image={el.image}
              name={el.name}
              category={el.category}
              price={el.price}
            />
          ))}
        </div>
      </div>

      <div className="my-5">
        <h2 className="font-bold text-2xl text-amber-600 mb-4 underline">
          Your Product
        </h2>

        <div className="flex gap-4 justify-center overflow-scroll scrollbar-none">
          {categoryList.map((el) => (
            <FilterProduct key={el} category={el} onClick={() => handleFilterProduct(el)}/>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 my-4">
          {dataFilter.map((el) => (
            <CardFeature
              key={el._id}
              image={el.image}
              name={el.name}
              category={el.category}
              price={el.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

