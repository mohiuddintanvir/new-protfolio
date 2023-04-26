import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillCaretLeftFill } from "react-icons/bs"
import logo from "../../Images/M-removebg-preview.png"

const Header = () => {
    // state calling
    const [open, setOpen] = useState(true)




    const manulist = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "About",
            link: "/about"
        },
        {
            name: "skills",
            link: "/skill"
        },
        {
            name: "Works",
            link: "/work"
        },
        {
            name: "Reviews",
            link: "/review"
        },
        {
            name: "Contact",
            link: "/contact"
        },
    ]

    return (
        <div className='flex'>
            <div className={`${open ? "w-72" : "w-20"} duration-300 h-screen bg-dark-purple relative`}>
                <h1 className={`absolute cursor-pointer -right-3 top-9 w-7 border-2 border-dark-purple ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}><BsFillCaretLeftFill /></h1>

                <div className='flex'>
<div>
    
</div>
                    <img src={logo} alt="" className={`cursor-pointer duration-500 `} />
                    <h1 className={`text-white origine-left font-medium text-lg duration-300 w-20 ${!open && "scale-0" }`}>Developer</h1>
                </div>
            </div>


        </div>
    );
};

export default Header;