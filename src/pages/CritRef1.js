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

     <div className='flex flex-col items-center justify-center p-[20px] text-left font-merriweather text-[#A46A7E] leading-relaxed'>
     <p className='mb-4'>
        At the time of doing this crit, I still have a few hours left to work on
        my project. So when you view the complete pages, some of these may not
        apply. I just didn't want to wait too late to do them - but if I get the
        time, I will work through this list and fix issues I have.
      </p>
    <h2 className='font-semibold text-[30px]'>Navigation:</h2>
    <p className='mb-4'>Cons of navigation:</p>
    <ul>
    <li>
          A. This was a problem last time, that I haven't managed to fix: This is kind of a con of my design process - I didn't realize how
          many subpages there would be and it's really hard to navigate to each
          page, considering the nav bar design. Hopefully in my next design,
          I'll have drop-down menus on each of the main nav bar buttons
        </li>
        <li>
          B. I haven't fixed this either, though it shouldn't need to be responsive with the new design. At the moment my nav bar is one of the only things on my page that
          isn't responsive: which is dissapointing, because my original
          wireframes design for both.
        </li>
    </ul>
    <h2 className='font-semibold text-[30px]'>Updated Colours:</h2>
    <p className='mb-4'>I know in my previous iteration, I was very proud of using the pink colour pallete but I found a different image that I preffered for my cover image, and the colour pallette transitioned into more orange and yellow.</p>

   <Footer/>
    </div>

    </>
  );
}

export default CritRef1;