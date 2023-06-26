import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/NavBar";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function BlogPage() {
    return (
      <>
      <div className="drop-shadow-lg">
     <Navbar/>
     <div className=" bg-cover bg-no-repeat bg-[url(./images/candy-hearts.jpg)] p-[100px]">
     <div className='flex flex-col items-center justify-center text-center'>
      <h1 className='text-[60px] font-blackHan text-white'>Blog Posts</h1>
      </div>
     </div>

     <div class="grid gap-2 grid-cols-3 grid-rows-3 p-[10px]">
  <Link to="/whatisart"  className="bg-[url(./images/yellow.jpg)] bg-cover bg-no-repeat h-[200px] flex flex-col items-center justify-center text-center font-blackHan text-white drop-shadow-lg"> What is internet art?</Link>
  <Link to="/adobe"  className="bg-[url(./images/donuts.jpg)] bg-cover bg-no-repeat h-[200px] flex flex-col items-center justify-center text-center font-blackHan text-white drop-shadow-lg"> Here lies Adobe Flash </Link>
  <Link to="/convention"  className="bg-[url(./images/pink-ice.jpg)] bg-cover bg-no-repeat h-[200px] flex flex-col items-center justify-center text-center font-blackHan text-white drop-shadow-lg">Convention and Context </Link>
  <Link to="/essay"  className="bg-[url(./images/sherbert.jpg)] bg-cover bg-no-repeat h-[200px] flex flex-col items-center justify-center text-center font-blackHan text-white drop-shadow-lg">Essay </Link>
  <Link to="/hist"  className="bg-[url(./images/hex.jpg)] bg-cover bg-no-repeat h-[200px] flex flex-col items-center justify-center text-center font-blackHan text-white drop-shadow-lg">History </Link>
  <Link to="/codeart"  className="bg-[url(./images/balls.jpg)] bg-cover bg-no-repeat h-[200px] flex flex-col items-center justify-center text-center font-blackHan text-white drop-shadow-lg">If Brendon wrote C# </Link>
  <Link to="/ai"  className="bg-[url(./images/choc.jpg)] bg-cover bg-no-repeat h-[200px] flex flex-col items-center justify-center text-center font-blackHan text-white drop-shadow-lg">AI and Art </Link>
  </div>
</div>
<Footer/>
      </>
    );
  }

  export default BlogPage;