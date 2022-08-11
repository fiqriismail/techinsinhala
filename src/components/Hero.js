import React from "react"

import HeroImage from "../images/hero.svg"

const Hero = () => {
  return (
    <section id="hero">
      <div className="container flex mx-auto items-center px-6 bg-gray-100 justify-between">
        <h1 class="text-4xl max-w-md  text-left">
          දන්න සිංහලෙන් ටෙක්නිකල් දේවල් කතා කරමු. ASP.NET, C#, JavaScript,
          Azure... මේ හැම දෙයක්ම!
        </h1>
        <img src={HeroImage} alt="" className="w-1/2" />
      </div>
    </section>
  )
}

export default Hero
