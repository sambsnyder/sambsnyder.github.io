import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Slide from "./Slide"

const ProjectImages = () => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(
          filter: { relativePath: { glob: "*images/projects/project*" } }
        ) {
          edges {
            node {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Slide projectImages={data.images.edges} />}
  />
)
export default ProjectImages
