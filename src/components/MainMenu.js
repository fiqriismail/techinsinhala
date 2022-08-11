import React from "react"
import { Link } from "gatsby"

import GreenLogo from "../images/logo-green.png"
import FAYouTube from "../images/youtube.svg"
import FALinkedIn from "../images/linkedin.svg"
import FABlog from "../images/blog.svg"

const MainMenu = () => {
  return (
    <section id="mainNavigation" className="bg-white">
      <nav className="relative container mx-auto p-4">
        <div className="flex justify-between ">
          <div className="flex items-center">
            <div className="">
              <img src={GreenLogo} alt="" />
            </div>
            <div className="">
              <h2 className="hidden text-gray-700 text-2xl mx-2 md:flex">
                tech in sinhala
              </h2>
            </div>
            <div className="hidden md:flex mx-4 mt-1 space-x-6">
              <Link to="/" className="hover:text-mainGreen">
                Home
              </Link>
              <Link to="/about" className="hover:text-mainGreen">
                About Me
              </Link>
              <Link to="/courses" className="hover:text-mainGreen">
                Video Tutorials
              </Link>
            </div>
          </div>
          <div className="flex space-x-2">
            <img src={FABlog} alt="" className="w-12 fill-mainGreen" />
            <img src={FAYouTube} alt="" className="w-12" />
            <img src={FALinkedIn} alt="" className="w-8" />
          </div>
        </div>
        {/* <div className="flex items-center justify-between">
          <div className="flex align-middle">
            <div className="p2">
              <img src={GreenLogo} alt="" />
            </div>
            <h3>tech in sinhala</h3>
          </div>

          <div className="flex">
            
          </div>
          <div>Social media links</div>
        </div> */}
      </nav>
    </section>
  )
}

export default MainMenu
