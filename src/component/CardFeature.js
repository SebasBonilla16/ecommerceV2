import React from 'react';

const CardFeature = ({ image, name, price, category }) => {
  return (
    <div className='w-full min-w-[280-px] max-w-[280px] bg-neutral-150 hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer flex flex-col'>
      <div className="h-20 flex flex-col justify-center items-center">
        <img src={image} alt={name} className="h-full" />
      </div>
      <h3 className='font-semibold text-slate-600 capitalize text-lg mt-4 whitespace-nowrap overflow-hidden'>
        {name}
      </h3>
      <p className='text-amber-600 font-medium'>{category}</p>
      <p className='font-bold'>
        <span className='text-sky-600'>$</span>
        <span>{price}</span>
      </p>
      <button className='bg-slate-500 py-1 mt-2 rounded hover:bg-slate-400'>Add to Cart</button>
    </div>
  );
};

export default CardFeature;
