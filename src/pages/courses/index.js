import React from "react"
import BodySection from "../../components/layout/BodySection"
import Footer from "../../components/layout/Footer"

import Layout from "../../components/layout/MainLayout"
import MainMenu from "../../components/layout/MainMenu"

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
