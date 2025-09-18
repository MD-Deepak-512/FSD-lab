
const Home = () => {
  return (
   <>
   <div className="flex flex-col     w-full justify-center items-center  " id="intro-sec">
   <div id="image-sec" className=" flex justify-center items-center">
        {/* <img src="https://img.freepik.com/premium-photo/memoji-handsome-asian-guy-chinese-man-white-background-emoji-cartoon-character_826801-7424.jpg?ga=GA1.1.405466027.1732552702&semt=ais_hybrid" alt="" /> */}
        <img src="https://img.freepik.com/premium-photo/flat-icon-food-isolated-background_1111524-5293.jpg?ga=GA1.1.405466027.1732552702&semt=ais_hybrid" alt="" id="intro-sec-img" />
    </div>
    <div className="text-2xl flex flex-col  text-center  justify-center items-center w-full  md:text-5xl" id="intro-content">
         <p className="md:text-4xl font-semibold mb-5 ">
            Hi, I'm Deepak
        </p>
        <p>
        Building innovative  
        </p>
        <p>
        web applications & user-focused 
        </p>
        <p>
        experiences.
        </p>
        <p className="text-sm w-full flex justify-center font-semibold mt-5">
            <p className="sm:w-1/2 px-5">
            I'm a Full Stack Web Developer passionate about crafting dynamic and responsive web solutions.
            I specialize in front-end frameworks, back-end development, database management, and seamless API integrations
            </p>
        </p>
    </div>
   </div>
   </>
  )
}

export default Home