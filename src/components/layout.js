import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useMouse } from '../functions'

import '../../scss/main.scss'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'
import Cursor from './cursor'
import { set } from 'lodash'

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

const SPEED = 1

const Layout = ({ classes, nav, fullpage, children }) => {
  const [counter, setCounter] = useState(0)
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

  function increaseCounter() {
    setCounter((c) => c + 1)
  }

  // reset counter and update state
  useEffect(() => {
    if (counter >= blendModes.length - 1) {
      setCounter(0)
    }
  }, [counter])

  return (
    <>
      <Seo />
      <Navigation />
      <Cursor event={e} increaseCounter={increaseCounter} />
      <div className="t-page-background  t-page-background--1"></div>
      <div
        className="t-page-background t-page-background--2 bg-clip"
        style={{
          mixBlendMode: blendModes[counter],
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
