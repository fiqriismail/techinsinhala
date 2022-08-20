import React from "react"

import BlackLogo from "../../images/logo-black.png"

const Footer = () => {
  return (
    <section id="footer">
      <div className="grid justify-items-center bg-slate-50 p-6">
        <img src={BlackLogo} className="p-4" alt="Black Logo" />
        <div>
          <a
            href="https://askfiqri.com"
            className="text-sm mx-2 hover:text-mainGreen"
            target="_blank"
            rel="noreferrer"
          >
            My English Blog
          </a>{" "}
          <span className="text-sm">|</span>
          <a
            href="https://youtube.com/c/askfiqri"
            className="text-sm mx-2 hover:text-mainGreen"
            target="_blank"
            rel="noreferrer"
          >
            YouTube Channel
          </a>{" "}
          <span className="text-sm">|</span>
          <a
            href="https://linkedin.com/in/fiqriismail"
            className="text-sm mx-2 hover:text-mainGreen"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  )
}

export default Footer
