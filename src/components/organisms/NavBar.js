import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Toggle from "../atoms/Toggle";
import MessageSpawner from "./MessageSpawner";


 
const Navbar = ({fontColor}) => {
    return (
        <>
        <div className="flex justify-center pt-6"> 
        
        <Link to="/obsess"  className=" ml-[15px] text-[#A46A7E] font-merriweather text-[20px]" >Home</Link>
        <Link to="/design"  className=" ml-[15px] text-[#A46A7E] font-merriweather text-[20px]">Design</Link>
        <Link to="/blogs"  className=" ml-[15px] text-[#A46A7E] font-merriweather text-[20px]">Blog</Link>
        <Link to="/obsess-artwork"  className=" ml-[15px] text-[#A46A7E] font-merriweather text-[20px]">Obsess</Link>
        
       <Toggle>
        <MessageSpawner/>
       </Toggle>
         </div>
        </>
        
    );
};
 
export default Navbar;