import { useState, useEffect, useMemo } from 'react'
import { debounce } from 'lodash'
import { throttle } from 'lodash'

// Trottle function for performance
const DURATION = 15
const throttled = (function () {
  let timeout = undefined
  return function throttle(callback) {
    if (timeout === undefined) {
      callback()
      timeout = setTimeout(() => {
        // allow another call to be throttled
        timeout = undefined
      }, DURATION)
    }
  }
})()

export function throttlify(callback) {
  return function throttlified(event) {
    throttled(() => {
      callback(event)
    })
  }
}

// Custom mouse hook to track mouse event
export function useMouse() {
  const [mouse, setMouse] = useState({
    e: null,
    x: null,
    y: null,
    movementX: null,
    movementY: null,
    speed: null,
  })

  const handle = (e) => {
    setMouse({
      e: e,
      x: e.clientX,
      y: e.clientY,
      movementX: Math.abs(e.movementX),
      movementY: Math.abs(e.movementY),
      speed: Math.sqrt(
        mouse.movementX * mouse.movementX + mouse.movementY * mouse.movementY
      ),
    })
  }

  const debouncedEventHandler = useMemo(() => debounce(handle, 500), [])
  const throttledEventHandler = useMemo(() => throttle(handle, 25), [])

  useEffect(() => {
    document.addEventListener('mousemove', throttledEventHandler)
    document.addEventListener('mousemove', debouncedEventHandler)
    return () => {
      document.removeEventListener('mousemove', throttledEventHandler)
      document.removeEventListener('mousemove', debouncedEventHandler)
      throttledEventHandler.cancel()
      debouncedEventHandler.cancel()
    }
  }, [])

  return mouse
}
