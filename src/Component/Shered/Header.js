import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
const manulist=[
    {
        name:"Home",
        link:"/"
    },
    {
        name:"About",
        link:"/about"
    },
    {
        name:"skills",
        link:"/skill"
    },
    {
        name:"Works",
        link:"/work"
    },
    {
        name:"Reviews",
        link:"/review"
    },
    {
        name:"Contact",
        link:"/contact"
    },
]

    return (
        <div>
            <ul>
                {
                    manulist.map(manu=>
                    <li><Link to={manu.link}>{manu.name}</Link></li>   
                        )
                }
            </ul>
        </div>
    );
};

export default Header;