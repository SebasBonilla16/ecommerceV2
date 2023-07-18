import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Shop = () => {
  const { filterby } = useParams();
  const productData = useSelector((state) => state.product.productList);

  const productDisplay = productData.filter((el) => el._id === filterby)[0];
  console.log(productDisplay);

  return (
    <div className="p-2 md: p-4">
      <div className="w-full max-w-4xl bg-slate-200 m-auto md:flex bg-natural-50">
        <div className="max-w-lg overflow-hidden">
          <img src={productDisplay.image} className="hover:scale-105 transition-all" alt={productDisplay.name} />
        </div>
        <div className="">
          <h3 className="font-semibold text-slate-600 text-center capitalize text-2xl-md:text-4xl">
            {productDisplay.name}
          </h3>
          <p className="text-amber-600 font-medium text-2xl">{productDisplay.category}</p>
          <p className="font-bold md:text-2xl">
            <span className="text-sky-600">$</span>
            <span>{productDisplay.price}</span>
          </p>
          <div className="flex gap-3 mt-2">
            <button className="bg-slate-500 py-2 px-4 rounded-lg text-xl font-semibold hover:bg-slate-400">
              Buy
            </button>
            <button className="bg-slate-500 py-2 px-4 rounded-lg text-xl font-semibold hover:bg-slate-400">
              Add to Cart
            </button>
          </div>
          <div>
            <p className='text-slate-800 font-medium'>Description : </p>
            <p>{productDisplay.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;


