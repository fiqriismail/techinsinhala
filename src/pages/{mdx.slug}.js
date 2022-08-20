import React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import MainLayout from "../components/layout/MainLayout"
import MainMenu from "../components/layout/MainMenu"
import Footer from "../components/layout/Footer"
import SingleBlogPost from "../components/blog/SingleBlogPost"

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.featuredImage)
  return (
    <MainLayout>
      <MainMenu />
      <SingleBlogPost
        featuredImage={image}
        title={data.mdx.frontmatter.title}
        body={data.mdx.body}
      />
      <Footer />
    </MainLayout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        slug
        date
        featuredImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`

export default BlogPost
