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

const SPEED = 5

const Layout = ({ nav, children }) => {
  const [state, setState] = useState({
    event: null,
    isFunMode: false,
    counter: 0,
  })

  const isDesktop = useMediaQuery({
    query: '(min-width: 992px)',
  })

  useEffect(() => {
    // trotthlify will execute the mouse event less for performance
    const onMovement = throttlify((e) => {
      if (isDesktop) {
        setState((prevState) => {
          return { ...prevState, event: e }
        })

        if (state.isFunMode) {
          if (state.counter >= blendModes.length - 1) {
            setState((prevState) => {
              return { ...prevState, counter: 0 }
            })
          } else {
            setState((prevState) => {
              return { ...prevState, counter: prevState.counter + 1 }
            })
          }
        }
      }
    })
    document.addEventListener('mousemove', onMovement)

    return () => {
      document.removeEventListener('mousemove', onMovement)
    }
  }, [state, isDesktop])

  // Toggle fun mode
  const toggleFunMode = () => {
    let bool = state.isFunMode
    bool ? (bool = false) : (bool = true)
    setState((prevState) => {
      return { ...prevState, isFunMode: bool }
    })
  }

  return (
    <>
      <Seo />
      <Navigation funModeHandler={toggleFunMode} isFunMode={state.isFunMode} />
      <Cursor event={state.event} isFunMode={state.isFunMode} />
      <div className="t-page-background  t-page-background--1"></div>
      <div
        className="t-page-background t-page-background--2 bg-clip"
        style={{
          mixBlendMode: state.isFunMode
            ? blendModes[state.counter]
            : 'hard-light',
        }}
      ></div>
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
