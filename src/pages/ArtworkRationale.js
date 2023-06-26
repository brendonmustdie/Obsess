import React from 'react';
import Navbar from '../components/organisms/NavBar';
import Footer from '../components/organisms/Footer';






function Rationale() {
  return (
    <>
   
   <Navbar/>
   <div className=" bg-cover bg-no-repeat bg-[url(./images/green-yellow.jpg)] p-[100px]">
     <div className='flex flex-col items-center justify-center text-center'>
      <h1 className='text-[60px] font-blackHan text-white'>Art Concept:</h1>
      </div>
     </div>

     <div className='flex flex-col items-center justify-center p-[20px] text-left font-merriweather text-[#A46A7E] leading-relaxed'>
     <h2 className='font-semibold text-[30px]'>Rationale:</h2>
     <p className='mb-4'>
        Having obsessive compulsive disorder is like trying to scroll a website
        that continously pops up ads over the content you need in order to
        function.
      </p>
      <p className='mb-4'>
        I was diagnosed with OCD early in highschool, but have been suffering
        with it for as long as I can remember. I've seen many different artistic
        interpretations of what it's like, some more accurate than others.
      </p>
      <p className='mb-4'>
        I want to make an internet artwork that expresses my struggles with
        obsession as best as I can: by forcing users to experience one continous
        obsession constantly popping up over content.
      </p>
      <p className='mb-4'>
        Under the pop-ups, I want to include an article about Cognitive
        Behaivoural Therapy (CBT). The idea behind CBT is that giving into
        compulsions reinforces the obsession - if you stop giving in, your brain
        gradually stops requiring you to give in, making it possible to function
        (theoretically).
      </p>
      <p className='mb-4'>
        The idea behind using a CBT article is to make users understand that
        they have to ignore the pop-ups to get through the article - you have to
        ignore your compulsions to function.
      </p>
      </div>

<Footer/>
    </>
  );
}

export default Rationale;

