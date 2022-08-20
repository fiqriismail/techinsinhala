import React from "react"

import BodySection from "../components/layout/BodySection"
import Footer from "../components/layout/Footer"
import Layout from "../components/layout/MainLayout"
import MainMenu from "../components/layout/MainMenu"
import ProfileImage from "../images/profile.jpeg"

const About = () => {
  return (
    <Layout>
      <MainMenu />
      <BodySection>
        <section id="singlePost" className="p-10 bg-white">
          <div className="container rounded-xl border border-gray-100 overflow-hidden">
            <div className="bg-red-100 grid items-stretch w-full">
              <img src={ProfileImage} alt="Fiqri Ismail" />
            </div>
            <h1 className="text-2xl mx-2 my-2 text-gray-600 md:text-4xl md:mx-4 md:my-4">
              මම කවුද කියල කියනව නම්...
            </h1>
            <div className="p-5 md:px-10 text-gray-700">
              <p>
                අවුරුදු 20 කට කිට්ටු සොෆ්ට්වෙයා ඉන්ඩස්ට්‍රී එකේ පළපුරුද්දක්
                තියෙන, මේ මොහොත වෙනකොට Software Architect කෙනෙක් විදිහට වැඩකරන,
                බ්ලොග් ලියන්න, Tutorial හදන, ඒ වගේම වෙලා තියෙන වෙලාවක ෆොටො ගන්න
                ආස කෙනෙක්. මම එක එක ඒරියාවල් වැඩ කරල තියෙනවා. ග්‍රැෆික්
                ඩිසයිනින්, 3D Animation වගේ දේවල් කර කර ඉඳල එක පාර Programming
                වලට වැටුන. ඒ මොහොතෙ ඉඳන් මේක තමයි ඉතිං කරන්නෙ.
              </p>
            </div>
          </div>
        </section>
      </BodySection>
      <Footer />
    </Layout>
  )
}

export default About
