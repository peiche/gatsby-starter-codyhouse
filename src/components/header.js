import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="bg-primary margin-bottom-md">
    <div className="container max-width-md padding-y-md">
      <h1 style={{ margin: 0 }}>
        <Link className="color-white text-decoration-none" to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
