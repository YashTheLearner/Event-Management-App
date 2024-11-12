// Home.jsx
import React from 'react';

const Home = () => {
  return (
    <>
    <div className='h-[60px] bg-[#1b263b] py-[8px] px-[96px] flex justify-between'>
      <div></div>
      <div className='flex'>
      <div className='text-[1.4rem] font-bold hover:text-[#ffcc00] text-[#EAEAEA]  tracking-wider'><i class="fas fa-home "></i> HOME</div>
      <div className='text-[1.4rem] font-bold hover:text-[#ffcc00] text-[#EAEAEA] tracking-wider'><i class="fas fa-plus-circle"></i>CREATE EVENTS</div>
      <input type="text"
      placeholder='Search Event' />
      <button class="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded" type="submit">Signup</button>
      <button class="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded" type="submit">Login</button>
     
      
      </div>
      </div>
    </>
  );
};

// Make sure this line is present
export default Home;

