import React from 'react';
import Navbar from '../components/organisms/NavBar';
import Footer from '../components/organisms/Footer';


function AdobeFlash() {
  return (
    <>
    <Navbar/>
    <div className=" bg-cover bg-no-repeat bg-[url(./images/donuts.jpg)] p-[100px]">
    <div className='flex flex-col items-center justify-center text-center'>
      <h1 className='text-[60px] font-blackHan text-white'>Here lies Adobe Flash </h1>
      </div>
    </div>

    <div className='flex flex-col p-[20px] text-left font-merriweather text-[#A46A7E] leading-relaxed'>
    <p className='italic'>Grant me the serenity to accept the things I cannot change, the strength to change the things I can, and the wisdom to know the difference. </p>
    <p className='mb-4'>McNamara’s “RIP Adobe Flash; Five Takeaways About the Plug-in’s Legacy in Net Art” (2020) memorializes the dissolve of Adobe Flash, a proprietry format of internet art, games, and websites. Adobe Flashed shaped the internet and internet art, as well as digital art, because it hosted some of the first internet artworks and games. (McNamara, 2020)</p>
    <p className='mb-4'>“Flash let us dream what we wanted the internet to look like” - Nathalie Lawhead.   (McNamara, 2020) McNamara states that Flash shaped the early 2000’s web aesthetic because it allowed users to develop and play animations, audio and video content. Flash based art led the way for interactive artworks, digital animations, art websites and games - because it was an accessible software tool.  (McNamara, 2020) Later in the article, McNamara quotes Cat Bluemke venting about the cost of Adobe Creative suite - “The way art schools give you four beautiful years of Adobe Create Suite, and then rips it away from you: ‘oh, now you have to pay for this now, and it’s more than your food budget’.”</p>
    <p className='mb-4'>McNamara says that by the 2010’s, the web “went fully 2.0” (McNamara, 2020) - the introduction of users sharing content in real-time, like blogs and social media posts (Danae, 2019)  - which made the internet social platform based. </p>
    <p className='mb-4'>When Apple chose not to support Flash in the 2007 release of iPhone 2G, it was the beginning of the end - because website standardization meant users started expecting websites to be accessible via mobile device. (McNamara, 2020)</p>
    <p className='mb-4'>The main thing to take away from the death of Flash is that nothing is constant - it’s devastating how much art, culture, and history from that time period have been lost to greed but we can expect it to happen again. And again. Living on the internet means acknowledging that everything you put out there, is out there forever, and can be seen by everyone. Working in a digital medium means making peace with the fact that we may lose everything once a greedy corportation decides our art is not worth archiving, and it might not be seen by anyone.</p>
    <h2 className='font-semibold text-[30px]'>References:</h2>
    <p className='mb-4'>DANAE (2019) ‘Net Art, Post-internet Art, New Aesthetics: The Fundamentals of Art on the Internet’, DIGITAL ART WEEKLY | Medium, 31 January.</p>
    <p className='mb-4'>McNamara, R. (2020) ‘RIP Adobe Flash: Five Takeaways About the Plug-in’s Legacy in Net Art’, Hyperallergic, 18 December.</p>
    </div>
  
    <Footer/>
    </>
  );
}

export default AdobeFlash;

