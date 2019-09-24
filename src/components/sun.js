/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Moon = () => {
  const data = useStaticQuery(graphql`
    query SunQuery {
      pic: file(absolutePath: { regex: "/sun.png/" }) {
        childImageSharp {
          fixed(width: 10, height: 10) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
      <Image
        fixed={data.pic.childImageSharp.fixed}
      />
  )
}

export default Moon
