import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/NavBar";



function Essay() {
  return (
    <>
    <Navbar/>
   <div className=" bg-cover bg-no-repeat bg-[url(./images/.jpg)] p-[100px]">
     <div className='flex flex-col items-center justify-center text-center'>
      <h1 className='text-[60px] font-blackHan text-white'>Net Art Essay:</h1>
      </div>
     </div>

     <div className='flex flex-col items-center justify-center p-[20px] text-left font-merriweather text-[#A46A7E] leading-relaxed'>
     <h2 className='font-semibold text-[30px]'>History and Development:</h2>
     <p className='mb-4'>The internet has completely changed every aspect of our lives, pioneering new ways of creating, sharing, and enjoying art: Ricci claims that this makes it “the most disruptive art medium since the mid-twentieth century” (Ricci, B., 2020)</p>
     <p className='mb-4'>
     The beginning of the Net Artmovement can be traced to the 1920’s dada art movement, Richard Huelsenback proposed to create art via telephone, in the 1920 “Dada Almanach” - showing the beginnings of art formed by sharing, collective authorship, and elements of communication - all trade marks of net art. (Ricci, B., 2020)
</p>
<p className='mb-4'>The 60’s showed the “Mail Art” movement, which became “Fluxius”. Ray Johnson’s “Mail” artwork was based on opennes and inclusion, a collective project of notes, doodles, and drawings. (Ricci, B., 2020)
</p>
<p className='mb-4'>The 80’s introduced Robert Adrian to the internet, where he investigated the theme of “an interconnect world via telecommunication networks” - echoing Huelsenback’s art via telephone. (Ricci, B., 2020) Adrian’s “The World in 24 Hours” required artists to generate and transmit information over devices. Experimental artworks like “The World in 24 Hours” are the origin of the Net Art movement - for many artists, the internet became “a playground to elaborate conective and collective practices”. (Ricci, B., 2020)
</p>
   
<p className='mb-4'>Net Art doesn’t have a core aesthetic, being a product of constant evolution and adapting to technological and social changes that facilitate it. (Ricci, B., 2020)
</p>
<p className='mb-4'>Some Net Art focuses on the internet and different websites but not all Many artists use Net Art to convey social or political messages, or create debates. (Ricci, B., 2020) </p>
<p className='mb-4'>Most net art from the eary 90s is irretrievable, having been built on outdated software. (O’Toole, F. 2019) In theory works on the internet should last forever, but in practice “the past is patchy, tearing wherever ambitious futures have stretched the network too thin.” (O’Toole, F. 2019) .
</p>

<p className='mb-4'> I touched on this briefly in my Adobe Flash blog post, but it’s strange to live in a time where anything on the internet will live there forever, but also be completely lost given enough time. </p>



  <h2 className='font-semibold text-[30px]'>References:</h2> 
  <p className='mb-4'>Ricci, B. (2020) ‘Net Art and How The Internet Has Created A New Medium’, Artland Magazine, 17 July.  </p>
  <p className='mb-4'>O’Toole, F. (2019) ‘The New Museum Hits “Save” on Net Art’, Hyperallergic, 20 February.</p>
</div>
<Footer/>
    </>
  );
}





export default Essay;

