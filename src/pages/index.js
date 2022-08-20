import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/MainLayout"
import MainMenu from "../components/layout/MainMenu"
import Hero from "../components/layout/Hero"
import BodySection from "../components/layout/BodySection"
import Footer from "../components/layout/Footer"
import BlogPost from "../components/blog/BlogPost"

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <MainMenu />
      <Hero />
      <BodySection>
        <h1 className="text-4xl mx-2 mb-4 text-gray-700 font-light">
          අලුත්ම ලිපි
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4">
          {data.allMdx.nodes.map(node => (
            <BlogPost
              postId={node.id}
              to={`/${node.slug}`}
              title={node.frontmatter.title}
              createdDate={node.frontmatter.date}
              featuredImage={node.frontmatter.featuredImage}
              description={node.frontmatter.description}
            />
          ))}
        </div>
      </BodySection>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          date(formatString: "DD-MM-yyyy")
          slug
          title
          description
          featuredImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        slug
      }
    }
  }
`

export default BlogPage
