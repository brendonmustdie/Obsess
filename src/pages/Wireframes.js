import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/NavBar";


function Wireframes() {
  return(
<>
<Navbar/>
<div className=" bg-cover bg-no-repeat bg-[url(./images/yellow.jpg)] p-[100px]">
    <div className='flex flex-col items-center justify-center text-center'>
     <h1 className='text-[60px] font-blackHan text-white'>Art Concept:</h1>
     </div>
    </div>

    <div className='flex flex-col items-center justify-center p-[20px] text-left font-merriweather text-[#A46A7E] leading-relaxed'>
    <h2 className='font-semibold text-[30px]'>Initial Wireframes:</h2>
    <h3 className='font-semibold text-[20px]'>Consistent Navigation:</h3>
    <p className='mb-4'>
        The first part of my design process was to include constant navigation across pages. 
      </p>
      <p className='mb-4'> The wireframes for this section were done in two parts: mobile, and desktop. </p>
      <img src="./images/Mobile-Nav.png" alt="A wireframe showing mobile navigation"></img>
      <p className='mb-4'>In the mobile wireframes for navigation, I tried to focus on readibility - the convention of phone screen navigation is to use a burger menu, which opens a secondary navigation menu across the screen - which is what I did. If this wbesitre only required one other page (my artwork page) I would have considered just having one button to lead the user there but because the nav needed to take users to lots of pages I thought to leave it open.</p>
      <img src="./images/Reg-Nav.png" alt="A wireframe showing navigation"></img>
      <p className='mb-4'>In the desktop wireframes for navigation, I tried to think about consistency across pages. I used a header nav because of it's reliablity at being conpletely out of the way and also regular website convention. I think most of my websites do and will have this navigation, largely because it's an expected navigation and it's easy to read. I like the idea of having a side, sticky nav bar, but that does feel less professional to me. I'm sure for a personal website I would consider it - but I do try to present all of my websites as professionally as possible. </p>
<p className='mb-4'>Even though many UI and UX designers have creative ways of changing website conventions, I think it becomes harder to use websites that don't follow conventions. So at the risk of being boring, I tend to try and play it safe. I think it's easy to excite a client with an impractical, creative design, but it's harder for the user to move through a hundred different pages that all work differently.</p>
<h3 className='font-semibold text-[20px]'>Home Page:</h3>
<p className='mb-4'>As discussed above, I like the idea of one button that leads the player somewhere. I always struggle with what to put on my homepage, and this is the first time it feels natural to me.</p>
<img src="./images/Home-des.png" alt="A wireframe showing my home page"></img>
<p className='mb-4'>On my homepage I want to influence user's movement to my artwork specifically. My artwork is meant to be the center of this webpage, and I want to lead the user there as early as possible, because that's what's important.</p>
<p className='mb-4'>So I added the name of the artwork with the button that leads you directly there. I think the colour of the button and it's placement should lead players to my artwork. I also think I'll probably name my artwork a verb: the artwork is probably going to be interactive (for my interactive media class lol) and I want users to feel intrigued and want to participate.</p>
<p className='mb-4'>I also use background images in all of my wireframes, planning for the pages. There will definitely have to be consistency in the background images, their themes and colour choices. I'm clearly a visual person and in a website full of text, the only way to really keep it interesting if through the use of pictures.</p>
<h3 className='font-semibold text-[20px]'>Blog Page:</h3>
<p className='mb-4'>I constantly run into this problem of not having wireframed my blog pages. So here's my fix for that.</p>
<img src="./images/Blog-des.png" alt="A wireframe showing blog layout"></img>
<p className='mb-4'>For my actual blog posts:</p>
<img src="./images/Blogformat.png" alt="A wireframe showing a blog page"></img>
<p className='mb-4'>I enjoyed making these wireframes and I'm happy that I finally feel comfortable making these - because I know what I'm looking for and trying to create in these early part. I'm very excited to start conceptualizing my artwork and writing a rationale for it.</p>

    </div>
    <Footer/>
</>
  );
}

export default Wireframes;

