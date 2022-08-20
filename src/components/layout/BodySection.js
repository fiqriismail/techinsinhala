import React from "react"

const BodySection = ({ children }) => {
  return (
    <section id="bodyArea" className="container bg-white p-6">
      {children}
    </section>
  )
}

export default BodySection
