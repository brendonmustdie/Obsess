import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className="border-t border-gray-300"></div> {/* Grey line */}
      <div className="flex justify-between pb-[80px] bg-white pl-[15px] pr-[15px]">
        <p className="text-slate-500">Made by Brendon Kruger, 2023</p>
        <a href="https://github.com/brendonmustdie" className="text-slate-500">Brendon's Github</a>
      </div>
    </div>
  );
};

export default Footer;