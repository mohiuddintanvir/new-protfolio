import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../Images/M-removebg-preview.png";
import { BsFillCaretLeftFill } from "react-icons/bs";
import { AiFillHome,AiOutlineComment,AiFillContacts } from "react-icons/ai";
import { MdOutlineMedicalInformation } from "react-icons/md";
import { SiKnowledgebase } from "react-icons/si";
import { GrProjects } from "react-icons/gr";


const Header = () => {
    // state calling
    const [open, setOpen] = useState(false)




   
        const manulist = [
            {
              name: "Home",
              link: "/",
              icon:<AiFillHome/>,
            },
            {
              name: "About",
              link: "/about",
              icon:<MdOutlineMedicalInformation/>,
            },
            {
              name: "skills",
              link: "/skill",
              icon:<SiKnowledgebase/>,
            },
            {
              name: "Works",
              link: "/work",
              icon:<GrProjects/>,
            },
            {
              name: "Reviews",
              link: "/review",
              icon:<AiOutlineComment/>,
            },
            {
              name: "Contact",
              link: "/contact",
              icon:<AiFillContacts/>,
            },
          ];
  

    return (
        <div className='flex'>
            <div className={`${open ? "w-72" : "w-20"} duration-300 h-screen bg-dark-purple relative`}>
                <h1 className={`absolute cursor-pointer -right-3 top-9 w-7 border-2 border-dark-purple ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}><BsFillCaretLeftFill /></h1>

                <div className='flex'>
                    <div>

                    </div>
                    <img src={logo} alt="" className={`cursor-pointer duration-500 `} />
                    <h1 className={`text-white origine-left font-medium text-lg duration-300 w-20 ${!open && "scale-0"}`}>Developer</h1>
                </div>
                <div>
                    <ul className="pt-6">
                        {
                            manulist.map(manu => <Link to={manu.link}><li className="text-gray-300 text-sm flex items-center  gap-x-4 pb-5 cursor-pointer p-2 hover:bg-light-white rounded-md">{manu.icon} <span className={`${!open && 'hidden'} origin-left dura`}>{manu.name}</span> </li></Link>)
                        }
                    </ul>
                </div>
            </div>


        </div>
    );
};

export default Header;