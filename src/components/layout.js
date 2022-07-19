import * as React from 'react'

import '../../scss/main.scss'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'

const Layout = ({ nav, children }) => {
  return (
    <>
      <Seo />
      <Navigation />
      <main className="t-page">
        <div className="container">
          <div className="row">
            {nav ? (
              <>
                <div className="col-md-4">{nav}</div>
                <div className="col-md-8">{children}</div>
              </>
            ) : (
              <div className="col">{children}</div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Layout
