import './App.css'
import Nav from './components/Nav'
import Intro from './components/Intro'
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
function App() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to('#intro',{
        opacity:0,
        y:-600,
        duration:0.5,   
        delay:0.5,
    });
    
    tl.from('#whole-nav',{
        opacity:0,
        y:20,
        duration:0.2,
    });
    tl.from('#elem-sec-el', {
        opacity: 0,
        y: 20,
        duration:0.3,
        stagger: 0.1,
    });
    tl.from("#intro-sec div",{
      opacity: 0,
      y:100,
      stagger: 0.2,
    })
    gsap.from("#img-abt",{
      opacity:-7,
      x:-150,
      duration:0.9,
      scrollTrigger:{
        Trigger:"#About-sec",
        start:"+=800 80%",
        end:"-=100 50%",
        scrub:2,
        // markers:true,
      }
    })
    gsap.from("#About #abt-content-1 p,#abt-content-2,#abt-btn,#abt-intrest-sec",{
      opacity:-2,
      y:70,
      stagger:0.2,
      duration:0.7,
      scrollTrigger:{
        Trigger:"#About-sec",
          start:"+=800 60%",
          end:"-=100 10%",
          scrub:3,
          // markers:true,
        }
      })
      gsap.from("#Card-project-sec",{
        opacity:-2,
        x:-200,
        delay:1,
        stagger:0.2,
        duration:3,
        scrollTrigger:{
          Trigger:"#About",
          start:"+=1250 80%",
          end:"-=100 10%",
          scrub:1.5,
          // markers:true,
        }
      })
      gsap.from("#skills div",{
        opacity:0,
        duration:0.3,
        x:-20,
        stagger:0.2,
        scrollTrigger:{
          trigger:"#skills",
          start:"+=350 80%",
          end:"-=10 10%",
          // markers:true,
          scrub:1,
        }
      })
      gsap.from("#Contact,#Contact div",{
        opacity:0,
        duration:0.7,
        y:60,
        stagger:0.4,
        scrollTrigger:{
          trigger:"#Contact",
          start:"+=10 80%",
          end:"-=240 10%",
          // markers:true,
          scrub:1,
        }
      })
     

});
  return (
    <>
    <Intro/>
    <div id="whole">
      <Nav/>
        <Home/>
         <About/>
          <Project/>
            <Skills/>
            <Contacts/>
    </div>
     
    </>
  )
}
export default App
