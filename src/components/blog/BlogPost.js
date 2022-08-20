import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const BlogPost = ({
  postId,
  title,
  to,
  createdDate,
  featuredImage,
  description,
}) => {
  const headerImage = getImage(featuredImage)
  return (
    <article
      key={postId}
      className="rounded-lg shadow-sm m-1 overflow-hidden border border-gray-50"
    >
      <Link to={to}>
        <GatsbyImage image={headerImage} alt={title} />
      </Link>
      <div className="grid grid-cols-2 gap-6 p-2">
        <span className="bg-green-50 rounded-lg p-1 text-xs text-gray-600 text-center">
          ASP.NET
        </span>
        <span className="bg-blue-50 rounded-lg p-1 text-xs text-gray-600 text-center">
          {createdDate}
        </span>
      </div>
      <div className="p-2">
        <Link to={to}>
          <h1 className="text-2xl my-1 text-gray-600">{title}</h1>
        </Link>
        <p className="text-lg text-gray-700">{description}</p>
      </div>
    </article>
  )
}

export default BlogPost
