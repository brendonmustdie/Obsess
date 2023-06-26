import React from 'react';





import Navbar from '../components/organisms/NavBar';
import Footer from '../components/organisms/Footer';



function CritRef1() {
  return (
    <>
    <Navbar/>
   <div className=" bg-cover bg-no-repeat bg-[url(./images/donuts2.jpg)] p-[100px]">
     <div className='flex flex-col items-center justify-center text-center'>
      <h1 className='text-[60px] font-blackHan text-white'>Critical Reflection:</h1>
      </div>
     </div>

     <div className='flex flex-col p-[20px] text-left font-merriweather text-[#A46A7E] leading-relaxed'>
     <p className='mb-4'>
        At the time of doing this crit, I still have a few hours left to work on
        my project. So when you view the complete pages, some of these may not
        apply. I just didn't want to wait too late to do them - but if I get the
        time, I will work through this list and fix issues I have.
      </p>
    <p className='mb-4'>My website really only has two different page, types. The home and the blog card pages. </p>
    <h2 className='font-semibold text-[30px]'>Home Page:</h2>
    <img src='./images/homecrit.jpg' alt='(my home page, with annotations)'></img>
    <h3 className='font-semibold text-[20px]'>Things I'm happy with:</h3>
    <p className='mb-4'>Starting at the top, I'm proud of my navigation. It's consistent between pages, and is white on the home page, but #A46A7E on the other pages, with white backgrounds.</p>
    <p className='mb-4'>I'm also happy with the over composition of my website, I think aligning things centrally is not what's popular right now, and my previous iteration had everything aligned left. But I feel that the centre alignment creats an eery calm over this page, which is intentional.</p>
    <p className='mb-4'>I like my phrasing on this page. It went through a few iterations when I first made the website but I seem to have settled, overall, on calling the audience to action, when asking them to participate in my experience. </p>
    <p className='mb-4'>I am happy with the heirarchy on this page - I'm quite happy with my placement of the toggle button, as it's directly under the user's call to action. </p>

    <h3 className='font-semibold text-[20px]'>Things I'm trying to work on:</h3>
    <p className='mb-4'>I'm unsure about the size of my hamburger menu, because I think it's too small to be noticeable, and if I make it any bigger it throws off the central composition. </p>
    <p className='mb-4'>At the moment my toggle is bright green when turned on, it's a bit hard to get a picture of it, because once toggled, the artwork begins. But if I have time, I'd like to make it pink.</p>

    <h2 className='font-semibold text-[30px]'>Design Page:</h2>
    <img src='./images/designcrit.jpg' alt='(my design page, with annotations)'></img>
    <h3 className='font-semibold text-[20px]'>Things I'm happy with:</h3>
    <p className='mb-4'>I really like my colour choices on this page. I'mhappy I managed to create a calm page, in opposition to my artwork.</p>
    <p className='mb-4'>The blog buttons are consistent across the design page and the blog page, so user's should have a general idea of where to go.</p>
    
    <h3 className='font-semibold text-[20px]'>Things I'm trying to work on:</h3>
    <p className='mb-4'>The toggle button isn't in line with the rest of the buttons on the nav bar, which I need to update.</p>
    <p className='mb-4'>Technically the page is not completely responsive,because when you opent he burger menu it just opens the regular menu.</p>
    <p className='mb-4'>I want to add a hover animation over the buttons, so that the user knows where they are and what they're doing.</p>
   <Footer/>
    </div>

    </>
  );
}

export default CritRef1;