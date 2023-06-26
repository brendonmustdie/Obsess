import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/NavBar";

function WhatIsArt() {
    return (
      <>
     <Navbar/>
     <div className=" bg-cover bg-no-repeat bg-[url(./images/yellow.jpg)] p-[100px]">
     <div className='flex flex-col items-center justify-center text-center'>
      <h1 className='text-[60px] font-blackHan text-white'>What Is Internet-Art?</h1>
      </div>
     </div>

     <div className='flex flex-col items-center justify-center p-[20px] text-left font-merriweather text-[#A46A7E] leading-relaxed'>
     <h2 className='font-semibold text-[30px]'>What is net/web art?</h2>
     <p className='mb-4'>Week 2’s readings brought up something that I’d never thought about before: How the internet will change the way art is created and even viewed. </p>
     <p className='mb-4'>Carrier’s, "The Work of Art in the Age of the Internet", (Carrier, 2020) uses Walter Benjamin’s 1936 “The Work of Art in the Age of Mechanical Reproduction” as a guide for understanding present day internet artwork. Benjamin discuss how the creation of film changes how plays/movies are created - in the early days of cinema, movies were filmed the way audiences would watch a play. (Benjamin, 1936) From a single view point, on a single set. (Carrier, 2020) But as film, as a medium, matured, filmmakers discovered new ways of using it - to get to the many different techniques we are familiar with in present day. (Carrier, 2020)</p>
    <p className='mb-4'>In transitioning to film, playwrights and directors, lost the benefits of having a life audience - but they gained newfound power in changing how the audience experiences their work. This is similar to the way artists transition to the internet - we lose some aspects, but we gain accessability and new control in how our works are viewed and interacted with. </p>
     <p className='mb-4'>What drew Carrier to this study was how many galleries transitioned to become online during the pandemic. (Carrier, 2020) They discuss how the internet has gone from something they could occasionally use, to an essential resource in their daily work. (Carrier, 2020)</p>
     <p className='mb-4'>
     Another facet of the internet’s relationship to art, is that art criticism is now online - and commentary is posted and read with the artwork they’re talking about. (Carrier, 2020) But the way we display and engage with works is not all that’s changed - how we make art has changed. (Carrier, 2020)
     </p>
     <p className='mb-4'>
     One line really struck me in this reading: “The next generation of artists will very likely work for the internet more than for the aura o the original.” (Carrier, 2020) This rings true - from tiktok dances, to youtubers and v-tubers, all the way back to comic book artists and painters - “likes” are currency. 
     </p>
     <p className='mb-4'>
     Carrier’s article seems to be more an observation thana  real study, but it’s interesting to see all the parts of the article where they draw comparisons between papers they’ve written before, and how the content would change if it was written now. (Carrier, 2020) 
     </p>
     <p className='mb-4'>Danae’s "Net Art, Post-internet Art, New Aesthetics: The Fundamentals of Art on the Internet” (2019) seeks to provide discussions and frameworks the define different kinds of art on the internet. </p>
     <p className='mb-4'>
     Danae’s paper points our what a huge influence the internet has on our faily lives and relationships, and how that makes it impossible to ignore internet culture and internet “artistic creations” (Danae, 2019)
     </p>
     <h2 className='font-semibold text-[30px]'> Net Art </h2>
     <p className='mb-4'>Net Art, Danae explains, relates to “network art”, which started being explored in the 1970s, when Videotex (the end-user information system) became widely used. (Danae, 2019)</p>
     <p className='mb-4'>We refer to net art are when talking about art produced during the “Web 1.0” era, in the 90’s - this time is concerned with static web pages without user interface. (Danae, 2019)</p>
     <h2 className='font-semibold text-[30px]'>Post-Internet Art</h2>
     <p className='mb-4'>
     The term “Post-Internet art” was coined in 2006 by Marisa Olson, who used it to distinguish the what stands outside the internet, because she used online content for art production offline. (Danae, 2019)
     </p>
     <p className='mb-4'>
     The meaning has changed and it no longer provides a clear demarcation between pre-internet and post-internet but describes the transition Web 2.0. which inroduced users to sharing content in real time. (Danae, 2019)
     </p>
     <p className='mb-4'>
     Danae makes an interesting observation: The main difference is the position of the artist, which in Post-Internet Art not only witnesses the web, but interacts with it. (Danae, 2019)
     </p>
     <h2 className='font-semibold text-[30px]'>New Aesthetics</h2>
     <p className='mb-4'>New Aesthetics, a phrase that was used in 2012, refers to “the merging of the virtual and the physical” which occurs because of the internet and digital technology. (Danae, 2019)</p>
     <p className='mb-4'>“New Aesthetics reviews the network itself” - it’s function and structure, as they become important to the arts. (Danae, 2019)</p>
     <p className='mb-4'>Danae’s work is very interesting but has always felt just out of my grasp, I’ve read this paper a few times and even written a couple of summaries for myself and it’s overall meaning still seems to evade me. The definitions of different internet artwork categories are not quite yet agreed upon and that makes this even harder to get through. </p>
     <h2 className='font-semibold text-[30px]'>References:</h2>
     <p className='mb-4'>Carrier, D (2020) 'The work of art in the age of the internet'</p>
     <p className='mb-4'>DANAE (2019) ‘Net Art, Post-internet Art, New Aesthetics: The Fundamentals of Art on the Internet’, DIGITAL ART WEEKLY | Medium, 31 January.</p>
    <p className='mb-4'>Benjamin, W. (1936),'The Work of Art in the Age of
Mechanical Reproduction' </p>
     </div>
     <Footer/>
      </>
    );
  }
  
  export default WhatIsArt;