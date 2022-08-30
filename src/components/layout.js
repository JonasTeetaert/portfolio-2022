import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { throttlify } from '../functions'

import '../../scss/main.scss'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'
import Cursor from './cursor'

const blendModes = [
  'color',
  'hard-light',
  'multiply',
  'darken',
  'hue',
  'luminosity',
  'overlay',
  'saturation',
]

const Layout = ({ classes, nav, fullpage, children }) => {
  const [mouse, setMouse] = useState({
    e: null,
    x: null,
    y: null,
    // movementX: null,
    // movementY: null,
    // speed: null,
  })
  const [funMode, setFunMode] = useState(false)
  const [counter, setCounter] = useState(0)

  // Mobile check
  const isDesktop = useMediaQuery({
    query: '(min-width: 992px)',
  })

  useEffect(() => {
    // trotthlify will execute the mouse event less for performance
    const handle = throttlify((e) => {
      if (isDesktop) {
        setMouse({
          e: e,
          x: e.clientX,
          y: e.clientY,
          // movementX: Math.abs(e.movementY),
          // movementY: Math.abs(e.movementY),
          // speed: speed,
        })
        if (funMode) {
          if (counter >= blendModes.length - 1) {
            setCounter(0)
          } else {
            setCounter(counter + 1)
          }
        }
      }
    })
    document.addEventListener('mousemove', handle)
    return () => document.removeEventListener('mousemove', handle)
  }, [isDesktop, counter, funMode])

  // Toggle fun mode
  const toggleFunMode = () => {
    setFunMode((bool) => !bool)
  }

  return (
    <>
      <Seo />
      <Navigation funModeHandler={toggleFunMode} isFunMode={funMode} />
      <Cursor event={mouse.e} />
      <div className="t-page-background  t-page-background--1"></div>
      <div
        className="t-page-background t-page-background--2 bg-clip"
        style={{
          mixBlendMode: funMode ? blendModes[counter] : 'hard-light',
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
