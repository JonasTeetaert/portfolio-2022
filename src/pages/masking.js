import React, { useEffect, useState } from 'react'
import { useMouse } from '../functions'

import Cursor from '../components/cursor'

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
const funMode = true

const Masking = () => {
  const { e, x, y, movementX, movementY, movement } = useMouse()
  const [backgroundPos, setBackgroundPos] = useState(0)
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    setBackgroundPos((b) => b + movement)
  }, [movement])

  useEffect(() => {
    if (counter >= blendModes.length - 1) {
      setCounter(0)
    } else {
      setCounter((c) => c + 1)
    }
  }, [e])

  return (
    <>
      <Cursor event={e} />
      <div className="t-page-background t-page-background--1"></div>
      <div
        className="t-page-background t-page-background--2 bg-clip"
        style={{
          backgroundPosition: `${backgroundPos}px`,
          mixBlendMode: funMode ? blendModes[counter] : 'hard-light',
        }}
      ></div>
      <main className="t-fullpage">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>Masking Test</h2>
              <p>X: {x}</p>
              <p>Y: {y}</p>
              <p>movementX: {movementX}</p>
              <p>movementY: {movementY}</p>
              <p>movement: {movement}</p>
              <a href="/">Dit is een link</a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Masking
