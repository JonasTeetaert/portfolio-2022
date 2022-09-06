import React, { useState, useEffect } from 'react'
import anime from 'animejs'

function animateButton(el, scale, duration, easing) {
  anime.remove(el)
  anime({
    targets: el,
    scale: scale,
    duration: duration,
    easing: easing,
  })
}

function enterButton(el) {
  animateButton(el, 35, 500, 'easeInOutCubic')
}

function leaveButton(el) {
  animateButton(el, 1.0, 400, 'easeInOutCubic')
}

const Cursor = ({ event }) => {
  const [state, setState] = useState({
    x: null,
    y: null,
    scaleSVG: 0,
    opacity: 0,
    scaleCursor: 0,
  })

  // componentDidMount
  useEffect(() => {
    const aTags = document.querySelectorAll('a')
    aTags.forEach((tag) => {
      tag.addEventListener(
        'mouseenter',
        () => {
          enterButton('#clip-circle circle')
        },
        false
      )

      tag.addEventListener(
        'mouseleave',
        () => {
          leaveButton('#clip-circle circle')
        },
        false
      )
    })
  }, [])

  // componentDidUpdate
  useEffect(() => {
    if (event != null) {
      if (
        event.target.localName === 'a' ||
        event.target.localName === 'button'
      ) {
        // on hover
        setState({
          x: event.clientX,
          y: event.clientY,
          scaleSVG: 1,
          scaleCursor: 5,
        })
      } else {
        // rest state
        setState({
          x: event.clientX,
          y: event.clientY,
          scaleSVG: 1,
          scaleCursor: 1,
        })
      }
    }
  }, [event])

  return (
    <>
      <div
        className="cursor"
        style={{
          transform: `translate(${state.x}px,${state.y}px)`,
        }}
      >
        <div style={{ transform: ` scale(${state.scaleCursor})` }}></div>
      </div>
      <svg width="0" height="0">
        <defs>
          <clipPath
            id="clip-circle"
            style={{
              transform: `translate(${state.x}px,${state.y}px)`,
            }}
          >
            <circle
              cx="0"
              cy="0"
              r="40"
              // style={{
              //   transform: `scale(${state.scaleSVG})`,
              // }}
            />
          </clipPath>
        </defs>
      </svg>
    </>
  )
}

export default Cursor
