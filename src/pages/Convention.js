import React from 'react';
import Navbar from '../components/organisms/NavBar';
import Footer from '../components/organisms/Footer';

function Convention() {
  return (
    <>
   <Navbar/>
   <div className=" bg-cover bg-no-repeat bg-[url(./images/pink-ice.jpg)] p-[100px]">
     <div className='flex flex-col items-center justify-center text-center'>
      <h1 className='text-[60px] font-blackHan text-white'>Context and Convention</h1>
      </div>
     </div>

     <div className='flex flex-col items-center justify-center p-[50px] text-left font-merriweather text-[#A46A7E] leading-relaxed'>
     <p className='mb-4'>Mailloux defines conventions as “shared practices”, his paper seeks to examinwhow conventions are used in interpretation practices. (Mailloux, 1983)  He defines three kinds of conventions: (1) traditional conventions recognizing past regularities in action, (2) prescriptive conventions regulating future action, (3) constitutive conventions that determine present meaning.  (Mailloux, 1983) </p>
     <h2 className='font-semibold text-[20px]'>Traditional Conventions</h2>
     <p className='mb-4'>These conventions are based on precedents, and regularities. (Mailloux, 1983) i.e. “We do it this way because it has always been done this way.” Unfamiliar and unexpected practices which are adopted by multiple people, become traditional conventions.  (Mailloux, 1983) The first use of the hamburger menu may have had initial shock value, but once it was used by multiple developers, it became a convention - repetition is “an essential feature” of the traditional convention, repirition must become regularly performed. (Mailloux, 1983)   But what counts as repetition and regularity depend entirely on context. (Mailloux, 1983) </p>
     <p className='mb-4'>Mailloux says something very interesting here: “Traditional conventions are repetitions that become regularities against which differences stand out.” I’m very intrigues by the implication of this - so far, everything Mailloux has said has come as second nature to me but I never considered the idea of convention being defined by lack of it. Though, I suppose if a website did not make use of a hamburger or meatball menu, it would seem weird and difficult to navigate. That makes me think that an important part of making art, websites, games…anything…means you need to be familiar with what has already been established in the field. And…suddenly it all clicks into place - and this theory doesn’t feel like a waste of time. </p>
     <h2 className='font-semibold text-[20px]'>Prescriptive Conventions</h2>
    <p className='mb-4'>Prescriptive conventions are formed because of their endorsement by members of society. i.e. “I do it this way, because my friends do it this way.” These conventions are based on agreement or stipulation, rather than precedent for their authority.</p>
    <h2 className='font-semibold text-[20px]'> Constitutive Conventions</h2>
    <p className='mb-4'>Mailloux thinks of constitutive conventions as shared practices between prescriptive and traditional conventions. An interesting thing discussed in this section of the paper, is whether readers use conventions to read literatue and that they recognize signs that indicate wich conventions are appropriate to use to understand the text. I don’t really understand this discussion and string of arguments throughout it, and I struggle to understand why it’s really useful to know. It seems like, Long Story Short, Mailloux points out that the context of the literature and the context of the lense through which it is read, provide the convention. And in this way, convention and context are inseprable. </p>
    <h2 className='font-semibold text-[20px]'>References:</h2>
    <p className='mb-4'>Mailloux, S. (1983) "Convention and Context"</p>
    </div>
    <Footer/>
    </>
  );
}

export default Convention;

