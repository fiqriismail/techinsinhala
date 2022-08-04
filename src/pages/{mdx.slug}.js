import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.featuredImage)
  return (
    <div>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.title} />
      <p>{data.mdx.frontmatter.title}</p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </div>
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
