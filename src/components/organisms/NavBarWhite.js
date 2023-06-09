import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

 
const NavbarWhite = ({fontColor}) => {
    return (
        <>
        <div className="flex justify-center pt-6"> 
        
        <Link to="/obsess"  className=" ml-[15px] text-white font-merriweather text-[20px]" >Home</Link>
        <Link to="/design"  className="ml-[15px] text-white font-merriweather text-[20px]">Design</Link>
        <Link to="/blogs"  className=" ml-[15px] text-white font-merriweather text-[20px]">Blog</Link>
        <Link to="/obsess-artwork"  className=" ml-[15px] text-white font-merriweather text-[20px]">Obsess</Link>

         </div>
        </>
        
    );
};
 
export default NavbarWhite;