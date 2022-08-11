import React from "react"
import BodySection from "../components/BodySection"
import Footer from "../components/Footer"

import Layout from "../components/Layout"
import MainMenu from "../components/MainMenu"

const About = () => {
  return (
    <Layout>
      <MainMenu />
      <BodySection>
        <h1>About me</h1>
      </BodySection>
      <Footer />
    </Layout>
  )
}

export default About
