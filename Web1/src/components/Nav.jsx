import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TiThMenu } from "react-icons/ti";
// import { IoIosCloseCircleOutline } from "react-icons/io";
import { useState,useEffect ,useRef} from 'react';
gsap.registerPlugin(useGSAP);
const Nav = () => {
  const tl2 = useRef();
  const [menuClicked,setmenuClicked] = useState(false);
  function handlemenuClicked(){
    setmenuClicked(!menuClicked);
    console.log(menuClicked);
  }
  useEffect(()=>{
    tl2.current = gsap.timeline({
        paused:true,
    }),
    tl2.current.to('#sub-nav',{
        top:0,
        duration:0.7,
    })
},[])
useEffect(()=>{
  menuClicked ? tl2.current.play() : tl2.current.reverse();
},[menuClicked])


    
  return (  
    <>
    <nav>
    <div className="flex justify-between align-baseline " id="whole-nav">
      
       <div id="brand-sec">
       <div className='Brand text-3xl p-1 sm:text-5xl' id="brand">Portfolio</div>
       </div>
       <div id="elem-sec" className="hidden md:flex justify-stretch align-baseline gap-7 text-xl ">
        <a href="#Home" id="elem-sec-el" >Home</a>
        <a href="#About" id="elem-sec-el">About</a>
        <a href="#skills" id="elem-sec-el">Skills</a>
        <a href="#project-sec" id="elem-sec-el">Projects</a>
        <a href="#Contact" id="elem-sec-el">Contact</a>
       </div>
       <button onClick={handlemenuClicked} className=' text-2xl sm:hidden'>
       <TiThMenu/>
       </button>
    </div>
    <div>
            <div id="sub-nav" className=' sm:hidden flex flex-col justify-center'>
            <a href="#" id="elem-sec-el" onClick={handlemenuClicked}>Home</a>
            <a href="#About" id="elem-sec-el" onClick={handlemenuClicked}>About</a> 
            <a href="#skills" id="elem-sec-el" onClick={handlemenuClicked}>Skills</a>
            <a href="#project-sec" id="elem-sec-el" onClick={handlemenuClicked}>Projects</a>
            <a href="#Contact" id="elem-sec-el" onClick={handlemenuClicked}>Contact</a>
            </div>
        </div>
    <div>
    </div>
    </nav>
    </>
  )
}

export default Nav