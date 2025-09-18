
const Contacts = () => {
  return (
    <>
    <div id='Contact'>
    <footer className=" bg-black text-white -m-3 rounded-lg p-4 overflow-hidden pt-8 pb-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap text-left lg:text-left">
              <div className="w-full lg:w-6/12 px-4">
                <h4 className="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
                <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Feel free to reach out for project development or collaboration opportunities. Let's work together to bring innovative ideas to life
                </h5>
                <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                  Gmail:Munakaladeepak@gmail.com
                </h5>
               
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="flex flex-wrap items-top mb-6">
                  <div className="w-full lg:w-4/12 px-4 ml-auto">
                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                    <ul className="list-unstyled">
                      <li>
                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#About">About Us</a>
                      </li>
                      <li>
                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" target="_blank" href="https://www.linkedin.com/in/m-deepak-7970b931a">Linkedin</a>
                      </li>
                      <li>
                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/Munakaladeepak">Github</a>
                      </li>
                      
                    </ul>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Contact Me</span>
                    <ul className="list-unstyled">
                      <li>
                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Number:</a>
                      </li>
                     
                      <li>
                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">+91 9652462235</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-6 border-blueGray-300"/>
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                <div className="text-sm text-blueGray-500 font-semibold py-1">
                 
                  </div>
              </div>
            </div>
          </div>
        </footer>
    </div>
    </>
  )
}

export default Contacts