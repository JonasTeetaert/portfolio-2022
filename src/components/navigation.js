import * as React from 'react'
import { Link } from 'gatsby'

const Navigation = () => (
  <nav className="m-nav">
    <div className="container">
      <div className="row">
        <div className="col m-nav__wrapper">
          <Link to="/" className="m-nav__logo">
            Jonas Teetaert
          </Link>
          <ul className="m-nav__list">
            {/* <li>
              <Link to="/blog/">Blog</Link>
            </li> */}
            <li>
              <button className="a-cta">Fun Mode</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
)

export default Navigation
