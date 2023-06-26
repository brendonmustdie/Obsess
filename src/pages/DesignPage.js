import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/NavBar";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function DesignPage() {
    return (
      <>
      <div className="drop-shadow-lg">                                                                                                  
     <Navbar/>
     <div className=" bg-cover bg-no-repeat bg-[url(./images/candy-hearts.jpg)] p-[100px]">
     <div className='flex flex-col items-center justify-center text-center'>
      <h1 className='text-[60px] font-blackHan text-white'>Design Page</h1>
      </div>
     </div>

     <div class="grid gap-2 grid-cols-3 grid-rows-3 p-[10px]">
  <Link to="/wireframes"  className="bg-[url(./images/yellow.jpg)] bg-cover bg-no-repeat h-[200px] flex flex-col items-center justify-center text-center font-blackHan text-white">Wireframes </Link>
  <Link to="/styleguide"  className="bg-[url(./images/donuts.jpg)] bg-cover bg-no-repeat h-[200px] flex flex-col items-center justify-center text-center font-blackHan text-white">Updated Styleguide </Link>
  <Link to="/arttheory"  className="bg-[url(./images/pink-ice.jpg)] bg-cover bg-no-repeat h-[200px] flex flex-col items-center justify-center text-center font-blackHan text-white">Artwork Concept </Link>
  <Link to="/rationale"  className="bg-[url(./images/sherbert.jpg)] bg-cover bg-no-repeat h-[200px] flex flex-col items-center justify-center text-center font-blackHan text-white">Artwork Rationale </Link>
  <Link to="/crit1"  className="bg-[url(./images/donuts2.jpg)] bg-cover bg-no-repeat h-[200px] flex flex-col items-center justify-center text-center font-blackHan text-white"> Updated Critical Reflections </Link>
 
</div>
</div>
<Footer/>
      </>
    );
  }

  export default DesignPage;