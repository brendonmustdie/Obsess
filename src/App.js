import React from 'react';

import { BrowserRouter as Router, Route, Routes, Link, Switch } from 'react-router-dom';
import ObsessPage from '../src/pages/ObsessPage';

import OButton from './components/atoms/OButton';
import Footer from './components/organisms/Footer';
import NavbarWhite from './components/organisms/NavBarWhite';
import BlogPage from './pages/BlogPage';
import DesignPage from './pages/DesignPage';
import WhatIsArt from './pages/WhatIsArt';
import AdobeFlash from './pages/AdobeFlash';
import Convention from './pages/Convention';
import ArtworkTheory from './pages/ArtworkTheory';
import Rationale from './pages/ArtworkRationale';
import Wireframes from './pages/Wireframes';
import Styleguide from './pages/Styleguide';
import CritRef1 from './pages/CritRef1';
import Essay from './pages/Essay';


function HomePage() {
  return (
    <>
   
    <div className=" bg-cover bg-no-repeat bg-[url(./images/candy-hearts.jpg)] min-h-screen">
    <NavbarWhite/>
    <div className='flex flex-col items-center justify-center min-h-screen drop-shadow-lg'>
    <h1 className='text-[60px] font-merriweather text-white'>Experience</h1>
    <h1 className='text-[60px] font-merriweather text-white' >Obsession:</h1> 
    <p className='text-[20px] text-white'>Become your compulsions.</p>
    <OButton/>
    </div>
    <Footer/>
    </div>
    </>
  );
}



function App() {
  return (
      <Router>
          <Routes>
              <Route exact path='/' element={<HomePage />} />
              <Route path='/obsess' element={<ObsessPage />} />
              <Route path= '/blogs' element={<BlogPage/>}/>
              <Route path='/design' element={<DesignPage/>}/>
              <Route path='/whatisart' element={<WhatIsArt/>}/>
              <Route path='/adobe' element={<AdobeFlash/>}/>
              <Route path='/convention' element={<Convention/>}/>
              <Route path='/arttheory' element={<ArtworkTheory/>}/>
              <Route path='/rationale' element={<Rationale/>}/>
              <Route path='/wireframes' element={<Wireframes/>}/>
              <Route path='/styleguide' element={<Styleguide/>}/>
              <Route path='/crit1' element={<CritRef1/>}/>
              <Route path='/essay' element={<Essay/>}/>
          </Routes>
      </Router>
  );
}

export default App;
