import React from "react"
import { Link } from "gatsby"

import GreenLogo from "../../images/logo-green.png"
import FAYouTube from "../../images/youtube.svg"
import FALinkedIn from "../../images/linkedin.svg"
import FABlog from "../../images/blog.svg"

const MainMenu = () => {
  return (
    <section id="mainNavigation" className="bg-white">
      <nav className="relative container mx-auto p-6">
        <div className="flex justify-between ">
          <div className="flex items-center">
            <div className="">
              <Link to="/">
                <img src={GreenLogo} alt="" />
              </Link>
            </div>
            <div>
              <Link to="/">
                <h2 className=" text-gray-700 text-2xl mx-2 md:flex">
                  tech in sinhala
                </h2>
              </Link>
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
          <div className="hidden md:flex space-x-2">
            <a href="https://askfiqri.com" target="_blank" rel="noreferrer">
              <img src={FABlog} alt="" className="w-12" />
            </a>
            <a
              href="https://youtube.com/c/askfiqri"
              target="_blank"
              rel="noreferrer"
            >
              <img src={FAYouTube} alt="" className="w-12" />
            </a>
            <a
              href="https://linkedin.com/in/fiqriismail"
              target="_blank"
              rel="noreferrer"
            >
              <img src={FALinkedIn} alt="" className="w-9" />
            </a>
          </div>
        </div>
      </nav>
      <div className="md:hidden mx-4 pb-4 space-x-6">
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
    </section>
  )
}

export default MainMenu
