import React from "react"
import { Link, graphql } from "gatsby"

const BlogPage = ({ data }) => {
  return (
    <div>
      {data.allMdx.nodes.map(node => (
        <article key={node.id}>
          <Link to={`/${node.slug}`}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <h2>{node.frontmatter.title}</h2>
          <p>Created date: {node.frontmatter.date}</p>
        </article>
      ))}
    </div>
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
        }
        id
        body
        slug
      }
    }
  }
`

export default BlogPage
