import React from "react"
import styles from "../css/footer.module.css"

const Footer = () => (
  <footer className={styles.footer}>
    <div>
      Built by Sam Snyder using <a href="https://www.gatsbyjs.org">Gatsby</a>{" "}
      and <a href="https://www.sanity.io/">Sanity.io</a> ©{" "}
      {new Date().getFullYear()}
    </div>
  </footer>
)

export default Footer
