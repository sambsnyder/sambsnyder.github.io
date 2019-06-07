import Carousel from "nuka-carousel"
import Img from "gatsby-image"
import React, { Component } from "react"
import PropTypes from "prop-types"
import slideMod from "../css/slide.module.css"

export default class Slide extends Component {
  static propTypes = {
    projectImages: PropTypes.array.isRequired,
  }

  render() {
    const { projectImages } = this.props
    return (
      <div id="slides" className={slideMod.slide}>
        <Carousel
          width="100%"
          wrapAround={true}
          dragging={true}
          speed={400}
          slideWidth={1}
          pauseOnHover={true}
        >
          {projectImages.map(image => (
            <Img
              key={image.node.childImageSharp.fluid.src}
              fluid={image.node.childImageSharp.fluid}
            />
          ))}
        </Carousel>
      </div>
    )
  }
}
