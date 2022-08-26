import React, { useState, useEffect } from 'react'

const Cursor = ({ event }) => {
  const [state, setState] = useState({
    x: null,
    y: null,
    scaleSVG: 0,
    opacity: 0,
    scaleCursor: 0,
  })

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
          scaleSVG: 45,
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
              style={{
                transform: `scale(${state.scaleSVG})`,
              }}
            />
          </clipPath>
        </defs>
      </svg>
    </>
  )
}

export default Cursor
