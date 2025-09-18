
import { FaHeadphones } from "react-icons/fa";
import { MdOutlineCardTravel } from "react-icons/md";
import { FaCameraRetro } from "react-icons/fa";
const About = () => {
  return (
    <>
    <div id="About" className="m-3 p-4">
      <div className="flex flex-wrap justify-between items-center" id="About-sec">
        <div id="img-abt" className="hidden sm:block w-1/2">
          <div className="p-3 rounded-lg" id="img-abt-glass">
          <img src="https://img.freepik.com/premium-photo/memoji-handsome-asian-guy-chinese-man-white-background-emoji-cartoon-character_826801-7424.jpg?ga=GA1.1.405466027.1732552702&semt=ais_hybrid" alt="" />
          </div>
        </div>
        <div id="abt-content" className="flex flex-col p-3 md:w-1/2 items-start">
          <div className="flex flex-col text-2xl md:text-4xl font-semibold justify-start space-y-3 mb-3" id="abt-content-1">
            <p className="text-xl md:text-3xl">About me </p>
            <p className="mb-3">M.Deepak</p>
          </div>
          <div className="text-sm md:text-sm text-justify" id="abt-content-2">
            Hello! 👋 I’m a highly motivated Full Stack Developer
            with a passion for transforming ideas into cutting-edge
            web solutions. With expertise in HTML, CSS, JavaScript,
          React, Tailwind CSS, Python, Java, C++, Git, and GitHub,
            I bring a blend of creativity and technical proficiency to
            every project. My focus is on delivering exceptional user
            experiences that drive results
          </div>
          <div id="abt-intrest-sec" className="flex flex-col">
            <div className="text-3xl mt-4">
              My Intrest
            </div>
            <div className="flex flex-wrap text-lg mt-3 space-x-5 ">
              <div className="flex flex-row space-x-2 align-baseline">
              <FaHeadphones className="text-2xl"/> 
              <p>Music</p>
              </div>
              <div className="flex flex-row space-x-2 align-baseline">
              <MdOutlineCardTravel className="text-2xl"/> 
              <p>Travel</p>
              </div>
            
              <div className="flex flex-row space-x-2 align-baseline">
              <FaCameraRetro className="text-2xl"/> 
              <p>photo</p>
              </div>
            </div>
          </div>
          <div id="abt-btn" className="flex flex-row items-start">
            <a target="blank" href="https://github.com/Munakaladeepak" className=" text-sm p-3 mt-5 px-6 m-2 duration-150 ease-in bg-black text-white rounded-lg hover:bg-white  hover:text-black hover:font-semibold">
              Github
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/m-deepak-7970b931a/" className=" text-sm p-3 mt-5 px-5 m-2 duration-150 ease-in bg-black text-white rounded-lg hover:bg-white  hover:text-black hover:font-semibold ">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About