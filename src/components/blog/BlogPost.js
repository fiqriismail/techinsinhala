import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const BlogPost = ({ postId, title, to, createdDate, featuredImage }) => {
  const headerImage = getImage(featuredImage)
  return (
    <article
      key={postId}
      className="rounded-lg shadow-sm m-1 overflow-hidden border border-gray-50"
    >
      <Link to={to}>
        <GatsbyImage image={headerImage} alt={title} />
      </Link>
      <Link to={to}>
        <h1 className="text-2xl p-2 text-gray-600">{title}</h1>
      </Link>
      <p className="p-2 text-gray-700">
        The quick brown fox jumps over the lazy dog. The quick brown fox jumps
        over the lazy dog.
      </p>
      <div className="flex justify-between p-2">
        <span className="bg-green-50 rounded-lg p-1 text-sm text-gray-600">
          ASP.NET
        </span>
        <span className="bg-blue-50 rounded-lg p-1 text-sm text-gray-600">
          {createdDate}
        </span>
      </div>
    </article>
  )
}

export default BlogPost
