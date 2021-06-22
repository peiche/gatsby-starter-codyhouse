import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      siteTitle: props.siteTitle
    };
  }

  componentDidMount() {
    let util = document.createElement('script');
    util.src = '/js/util.js';
    util.id = 'util-js';
    document.body.appendChild(util);
  }

  componentWillUnmount() {
    document.getElementById('util-js').remove();
  }

  render() {
    return (
      <header className="bg-primary margin-bottom-md">
        <div className="container max-width-md padding-y-md">
          <h1 style={{ margin: 0 }}>
            <Link className="color-white text-decoration-none" to="/">
              {this.state.siteTitle}
            </Link>
          </h1>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
