import React from 'react';
import AnimatedTitle from './AnimetedTitle'; // путь к компоненту, проверь правильность

const Navigate = () => {
  return (
    <div className='p-[50px] w-[500px] border-[2px] text-center rounded-2xl shadow-[9px_9px_0px_0px_rgba(0,0,0,0.8)]'>
      <AnimatedTitle text="About Us" className="text-[30px]" />
      <br />
      <img src="Foto/ss6.png" alt="" />
      <br />
      <AnimatedTitle text="Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education." className="text-base text-gray-700" />
      <br />
      <button className='bg-orange-300 p-[10px] w-[100%] rounded-2xl'>Learn more.➡️</button>
    </div>
  );
};

export default Navigate;
