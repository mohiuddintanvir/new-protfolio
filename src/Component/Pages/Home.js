
 

import React from 'react';
import Header from '../Shered/Header';


const Home = () => {
    return (
        <div className='grid grid-cols-3 gap-5 bg-black  w-screen h-screen'>
           <div>
            <Header></Header>
           </div>
           <div className='mt-[50%]'>
            <h4 className='w-[98px] h-[10px] font-[700] text-[16px] text-[#FFFBFB] '>Hi There! I’m </h4>
            <h1 className='w-[121px] h-[48px] font-[800] text-[60px] text-[#FFFBFB] '><span className='w-[212] h-[48px] font-[800] text-[60px] text-[#023ef7]'>Mohiuddin</span>Molla,</h1>

            <p className='mt-6 text-white leading-4'><span className='w-[107px] h-[19px] font-[700] text-[16px] text-[#023ef7] '>WEB Developer </span>waiting to develop your dream website</p>

          <div className='flex justify-center align-middle gap-4 mt-3'>
                <button  className='px-5 py-2 rounded bg-[#023ef7] text-white  '>Projects</button>
            <button className='px-5 py-2 rounded bg-[#023ef7] text-white  '>Contact</button>
          </div>
        
           </div>
           <div>
            <button className='px-5 py-2 rounded bg-[#023ef7] text-white float-right mr-10'>Hire me</button>
           </div>
        </div>
    );
};

export default Home;
