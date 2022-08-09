import React, { useState, useEffect } from 'react'

import '../../scss/main.scss'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'
import Cursor from './cursor'

const Layout = ({ nav, children }) => {
  const [state, setState] = useState({
    event: null,
  })

  const handleMovement = (e) => {
    setState({ event: e })
  }

  // componentDidMount
  useEffect(() => {
    window.addEventListener('scroll', handleMovement)
  }, [])

  return (
    <div role="presentation" onMouseMove={handleMovement}>
      <Seo />
      <Navigation />
      <Cursor event={state.event} />
      <div className="t-page-background  t-page-background--1"></div>
      <div className="t-page-background t-page-background--2 bg-clip"></div>
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
    </div>
  )
}

export default Layout
