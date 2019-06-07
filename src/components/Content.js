import React, { Component } from "react"
import layout from "../css/layout.module.css"

export default class Content extends Component {
  render() {
    return (
      <div className={layout.hero}>
        <h2>Who Am I?</h2>
        <p>Hello Welcome to Sam's Simple Portfolio Site!</p>
      </div>
    )
  }
}
