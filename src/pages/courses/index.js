import React from "react"
import BodySection from "../../components/BodySection"
import Footer from "../../components/Footer"

import Layout from "../../components/Layout"
import MainMenu from "../../components/MainMenu"

const CoursePage = () => {
  return (
    <Layout>
      <MainMenu />
      <BodySection>
        <h1>This is my video page </h1>
      </BodySection>
      <Footer />
    </Layout>
  )
}

export default CoursePage
