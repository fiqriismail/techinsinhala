import React from "react"

import HeroImage from "../../images/hero.svg"

const Hero = () => {
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse mx-auto items-center px-6 bg-gray-100 justify-between md:flex-row">
        <div className="flex-row text-center md:text-left">
          <h1 className="text-3xl mt-5 font-bold md:text-5xl text-gray-800">
            සිංහලෙන් ටෙක් ඉගෙන ගමු
          </h1>
          <h3 className="md:text-2xl mt-2 text-gray-600 font-light">
            C#, ASP.NET, ReactJS, WebAPI වගේ දේවල් සිංහලෙන් මෙතන ලියල තියන එක
            තමයි මගේ ප්‍රධාන අරමුණ.
          </h3>
        </div>
        <img src={HeroImage} alt="" className="md:w-1/2" />
      </div>
    </section>
  )
}

export default Hero
