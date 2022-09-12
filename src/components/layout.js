import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useMouse } from '../functions'

import '../../scss/main.scss'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'
import Cursor from './cursor'

const SPEED = 0.5

const Layout = ({ classes, nav, fullpage, children, blendMode }) => {
  const [backgroundPos, setBackgroundPos] = useState(0)
  const { e, movement } = useMouse()

  // Mobile check
  const isDesktop = useMediaQuery({
    query: '(min-width: 992px)',
  })

  useEffect(() => {
    if (isDesktop) {
      // background movement effect
      setBackgroundPos((b) => b + movement)
    }
  }, [isDesktop, movement])

  return (
    <>
      <Seo />
      <Navigation />
      <Cursor event={e} />
      <div className="t-page-background  t-page-background--1"></div>
      <div
        className="t-page-background t-page-background--2 bg-clip"
        style={{
          mixBlendMode: blendMode ? blendMode : 'hard-light',
          backgroundPosition: `${backgroundPos * SPEED}px`,
        }}
      ></div>
      <main
        className={`${fullpage ? 't-fullpage' : 't-page'} ${
          classes ? classes : ''
        }`}
      >
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
      <Footer fullpage={fullpage} />
    </>
  )
}

export default Layout
