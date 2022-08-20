import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

const SingleBlogPost = ({ title, featuredImage, body }) => {
  return (
    <section id="singlePost" className="p-10 bg-white">
      <div className="container rounded-xl border border-gray-100 overflow-hidden">
        <div className="bg-red-100 grid items-stretch h-80">
          <GatsbyImage image={featuredImage} alt={title} />
        </div>
        <h1 className="text-2xl mx-2 my-2 text-gray-600 md:text-4xl md:mx-4 md:my-4">
          {title}
        </h1>
        <div className="px-10 text-gray-700">
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </div>
    </section>
  )
}

export default SingleBlogPost
