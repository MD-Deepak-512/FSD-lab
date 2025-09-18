
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
const Intro = () => {
    // useGSAP(()=>'{
    // })
  return (
    <>
    <div id="intro" className=' text-5xl sm:text-9xl'>
        WELCOME
    </div>
    </>
  )
}

export default Intro