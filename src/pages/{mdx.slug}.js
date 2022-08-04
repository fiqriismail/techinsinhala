import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

const BlogPost = ({ data }) => {
  return (
    <div>
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
      }
      body
    }
  }
`

export default BlogPost
