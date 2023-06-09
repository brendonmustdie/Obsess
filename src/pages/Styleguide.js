import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Navbar from '../components/organisms/NavBar';
import Footer from '../components/organisms/Footer';



function Styleguide() {
  return (
    <>
    <Navbar/>
   <div className=" bg-cover bg-no-repeat bg-[url(./images/donuts.jpg)] p-[100px]">
    <div className='flex flex-col items-center justify-center text-center'>
     <h1 className='text-[60px] font-blackHan text-white'>Styleguide:</h1>
     </div>
    </div>
    <div className='flex flex-col items-center justify-center p-[20px] text-left font-merriweather text-[#A46A7E] leading-relaxed'>
    <p className='italic'>My artwork is about being overwhelmed by obsession - my visuals are intended to contrast this by being calming.</p>
    <h2 className='font-semibold text-[30px]'>Fonts:</h2>
    <p className='font-merriweather text-[50px]'>Merriweather Sans</p>
    <p className='font-merriweather font-semibold'>Merriweather Sans, bold.</p>
    <p className='font-blackHan text-[50px]'>Black Han Sans</p>
    <h2 className='font-semibold text-[30px]'>Colours:</h2>
    <div className='bg-[#A46A7E] text-white px-3 py-1 rounded-full mt-[10px]'>#A46A7E buttons</div>
<p>You can view my final sketches on my Figma, without an account: </p>
<Link to={"https://www.figma.com/community/file/1226618263333064468"}>here</Link>
<Footer/>
    
    </div>
    
    </>
  );
}





export default Styleguide;

