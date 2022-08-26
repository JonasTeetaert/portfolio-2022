import React from 'react'
import { useMouse } from '../functions'

import Cursor from '../components/cursor'

const Masking = () => {
  const { e, x, y, movementX, movementY, speed } = useMouse()
  return (
    <>
      <Cursor event={e} />
      <div className="t-page-background t-page-background--1"></div>
      <div className="t-page-background t-page-background--2 bg-clip"></div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Masking Test</h2>
            <p>X: {x}</p>
            <p>Y: {y}</p>
            <p>movementX: {movementX}</p>
            <p>movementY: {movementY}</p>
            <p>speed: {speed}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Masking
