import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

 const OButton =()=> {
    return(
<>
<button className="bg-[#A46A7E] px-3 py-1 rounded-full mt-[10px]">
<Link to="/obsess"  className="text-white font-merriweather text-[15px]">Obsess</Link>
</button>
</>
    )
 };
 
export default OButton;