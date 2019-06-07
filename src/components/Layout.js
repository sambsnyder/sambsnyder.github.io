import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import SideBar from "./Side-Bar"
import layoutMod from "../css/layout.module.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <SideBar />
        <div className={layoutMod.content}>
          <main>{children}</main>
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
