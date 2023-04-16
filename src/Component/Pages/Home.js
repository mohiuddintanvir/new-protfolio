import React from 'react';
import Header from '../Shered/Header';

const Home = () => {
    return (
        <div className='grid grid-cols-3 gap-5 bg-'>
           <div>
            <Header></Header>
           </div>
           <div>
            <h4 className='w-[98px] h-[19px] font-[700] text-[16px] text-[#FFFBFB]'>Hi There! I’m </h4>
            <h1 className='w-[121px] h-[48px] font-[800] text-[40px] text-[#FFFBFB] '><span className='w-[212] h-[48px] font-[800] text-[40px] text-[#023ef7]'>Mohiuddin</span>Molla,</h1>
            <p><span className='w-[107px] h-[19px] font-[700] text-[16px] text-[#023ef7]'>web designer </span>waiting to design your dream website</p>
            <button>Projects</button>
            <button>Contact</button>
           </div>
           <div>
            <button>Hire me</button>
           </div>
        </div>
    );
};

export default Home;