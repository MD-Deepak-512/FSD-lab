import { BiCodeAlt } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { SiPhp } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BiLogoNetlify } from "react-icons/bi";
const Skills = () => {
  return (
    <>  
    <div id="skills">
        <div className="flex flex-col m-3 p-4">
            <div className="flex flex-row align-middle mb-4 ">
            <BiCodeAlt className="text-5xl"/>
            <h2 className=" text-lg sm:text-4xl" id='Head'>Programming skill:</h2>
            </div>
            <div className="flex flex-col">
            <h2 className=" text-lg sm:text-2xl mb-4">Front-end skill:</h2>
            <div className="flex flex-wrap space-x-2 sm:space-x-4 mb-4">
                    <div className="bg-black text-white text-xl p-3 px-4 flex w-min rounded-lg space-x-1 m-3">
                    <FaHtml5 className="text-3xl"/> <p>Html</p>
                    </div>
                    <div className="bg-black text-white text-xl p-3 px-4 flex w-min rounded-lg space-x-1 m-3">
                    <FaCss3Alt className="text-3xl"/> <p>css</p>
                    </div>
                    <div className="bg-black text-white text-xl p-3 px-4 flex w-min rounded-lg space-x-1 m-3">
                    <FaJsSquare className="text-3xl mr-1"/> <p>Javascript</p>
                    </div>
                    <div className="bg-black text-white text-xl p-3 px-4 flex w-min rounded-lg space-x-1 m-3">
                    <FaBootstrap className="text-3xl"/> <p>Bootstrap</p>
                    </div>
                    <div className="bg-black text-white text-xl p-3 px-4 flex w-min rounded-lg space-x-1 m-3">
                    <RiTailwindCssFill className="text-3xl"/> <p>Tailwind </p>
                    </div>
                    <div className="bg-black text-white text-xl p-3 px-4 flex w-min rounded-lg space-x-1 m-3">
                    <FaReact className="text-3xl"/> <p>React</p>
                    </div>
            </div>
            <h2 className=" text-lg sm:text-2xl mb-4">Back-end skill:</h2>
            <div className="flex flex-wrap space-x-2 sm:space-x-4 mb-4">
                    <div className="bg-black text-white text-xl p-3 px-4 flex w-min rounded-lg space-x-1 m-3">
                    <SiPhp className="text-3xl"/> <p>PHP</p>
                    </div>
                    <div className="bg-black text-white text-xl p-3 px-4 flex rounded-lg space-x-1 m-3">
                    <RiNodejsLine className="text-3xl"/> <p>Node Js</p>
                    </div>
                    <div className="bg-black text-white text-xl p-3 px-4 flex rounded-lg space-x-1 m-3"> 
                        <p>java</p>
                    </div>
            </div>
            <h2 className=" text-lg sm:text-2xl mb-4">Data Base and tools skill:</h2>
            <div className="flex flex-wrap space-x-2 sm:space-x-4 mb-4">
                    <div className="bg-black text-white text-xl p-3 px-4 flex  rounded-lg space-x-1 m-3">
                    <SiMysql className="text-3xl mx-1"/> <p>MySQL</p>
                    </div>
                    <div className="bg-black text-white text-xl p-3 px-4 flex  rounded-lg space-x-1 m-3">
                    <FaGitAlt className="text-3xl mx-1"/> <p>Git</p>
                    </div>
                    <div className="bg-black text-white text-xl p-3 px-4 flex rounded-lg space-x-1 m-3">
                    <FaGithub className="text-3xl mx-1"/> <p>Git-Hub</p>
                    </div>
                    <div className="bg-black text-white text-xl p-3 px-4 flex rounded-lg space-x-1 m-3">
                    <BiLogoNetlify className="text-3xl mx-1"/> <p>Netlify</p>
                    </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Skills