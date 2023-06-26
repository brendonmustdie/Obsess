import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/NavBar";



function CodeArt() {
  return (
    <>
    <Navbar/>
   <div className=" bg-cover bg-no-repeat bg-[url(./images/balls.jpg)] p-[100px]">
     <div className='flex flex-col items-center justify-center text-center'>
      <h1 className='text-[60px] font-blackHan text-white'>CodeArt:</h1>
      </div>
     </div>

     <div className='flex flex-col items-center justify-center p-[20px] text-left font-merriweather text-[#A46A7E] leading-relaxed'>
     <h2 className='font-semibold text-[30px]'>Code::art: </h2>
     <p className='mb-4'>Code::art is an art journal which publishes code, in order to further explore the relationship between code and art. In article #0 (it’s cute that it’s called #0, the first number in programming, than #1) there are a myriad of artworks that I find really interesting. (Brand, S., 2019) </p>
     <p className='mb-4'>
     What I find most interesting about a lot of them, if that you don’t even need to know what the code is actually doing, to get the general idea. Alice Strete’s “over/under” (Brand, S., 2019)  uses words to mimick the action of weaving - and though, it’s coded, anyone can figure out what the code is meant to do. 
</p>
<p className='mb-4'>The product of  Alice Strete’s “over/under” (Brand, S., 2019)  reads like a poem, the code definitely adds to it, but doesn’t take anything away from the artwork and the way it’s interacted with as a viewer. 
</p>
<p className='mb-4'>Gilberto Agostinho’s “The Method Is Just A Tool” (Brand, S., 2019)  can also be viewed as an outsider - in fact, it’s almost better that way.  The repitition of the sentence “Art is not a fetsh, the method is just a tool” makes it obvious what the artist is intended. 
</p>
   
<p className='mb-4'>“If Hemingway Wrote Javascript”, by Angus Croll, (Croll, 2015) is a collection of javascript excercises, that Croll imagined he had distributed to a number of famouswriters - and the authors imagined responses to the assignment. 
</p>
<p className='mb-4'>This is interesting to a programmer, because it shows the different ways that personality and personal opinion can be injected into code and even, unintentially, show who you are. </p>
<p className='mb-4'>This is interesting to a reader, because they get to see their favourite author’s solving puzzles in typical fashion. 
</p>
<h2 className='font-semibold text-[30px]'>If Brendon wrote C#: </h2>
<p className='mb-4'> I know that I'm meant to write the assignment in JavaScript, but C# is my native language, and I thought I'd have more fun that way.</p>
<p className='mb-4'>in the fibonacci sequence, each number is the sum of the two that precede it.
</p>

<img src="./images/codeArt.png"></img>

  <h2 className='font-semibold text-[30px]'>References:</h2> 
  <p className='mb-4'>Brand, S. (2019) ‘code::art - Issue 0’, code::art [Preprint], (1)  </p>
  <p className='mb-4'>Croll, A. (2015) If Hemingway Wrote JavaScript. San Francisco, CA: No Starch Press</p>
</div>
<Footer/>
    </>
  );
}





export default CodeArt;

