import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Shop = () => {
  const {filterby} = useParams()
  const productData = useSelector(state => state.product.productList)

  const productDisplay = productData.filter(el => el._id === filterby)[0]
  console.log(productDisplay)

  return (
    <div className='p-2 md: p-4'>
      <div className='w-full max-w-4xl bg-slate-200 m-auto md:flex'>
        <div className='shadow overflow-hidden'>
          <img src={productDisplay.image} className='hover:scale-105 transition-all'/>
        </div>
        <div className=''>
        <h3 className='font-semibold text-slate-600 text-center capitalize text-2xl'>
            {productDisplay.name}
          </h3>
          <p className='text-center text-amber-600 font-medium'>{productDisplay.category}</p>
          <p className='text-center font-bold'>
            <span className='text-sky-600'>$</span>
            <span>{productDisplay.price}</span>
          </p>
          <div className=''>
          <button className='bg-slate-500 py-1 mt-2 rounded hover:bg-slate-400'>Buy</button>
          <button className='bg-slate-500 py-1 mt-2 rounded hover:bg-slate-400'>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
