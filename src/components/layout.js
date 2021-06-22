/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"

import Header from "./header"
import "../styles/main.scss"

const Layout = class extends React.Component {
  componentDidMount() {
    document.getElementsByTagName('html')[0].classList.add('js');
  }

  componentWillUnmount() {
    document.getElementsByTagName('html')[0].classList.remove('js');
  }

  render() {
    const { children } = this.props;

    return (
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
          <>
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
            <div className="container max-width-md">
              <main>{children}</main>
              <footer className="margin-top-sm">
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.com">Gatsby</a>
              </footer>
            </div>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
