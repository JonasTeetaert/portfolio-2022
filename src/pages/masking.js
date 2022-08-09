import React, { useState } from 'react'
import Cursor from '../components/cursor'

const Masking = () => {
  const [state, setState] = useState({
    event: null,
  })

  const handleOnMouseMove = (e) => {
    setState({ event: e })
  }

  return (
    <div
      role="presentation"
      className="t-fullpage"
      onMouseMove={handleOnMouseMove}
    >
      <Cursor event={state.event} />
      <div className="t-page-background t-page-background--1"></div>
      <div className="t-page-background t-page-background--2 bg-clip"></div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Masking Test</h2>
            <h1 className="effect">Page not found</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Masking
