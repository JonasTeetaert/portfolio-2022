import { useState, useEffect, useMemo } from 'react'
// import { debounce } from 'lodash'
import { throttle } from 'lodash'

// Custom mouse hook to track mouse event
export function useMouse() {
  const [mouse, setMouse] = useState({
    e: null,
    x: 0,
    y: 0,
    movementX: 0,
    movementY: 0,
    movement: 0,
  })

  const handle = (e) => {
    setMouse({
      e: e,
      x: e.clientX,
      y: e.clientY,
      movementX: Math.abs(e.movementX),
      movementY: Math.abs(e.movementY),
      movement: Math.sqrt(
        Math.abs(e.movementX) * Math.abs(e.movementX) +
          Math.abs(e.movementY) * Math.abs(e.movementY)
      ),
    })
  }

  // const debouncedEventHandler = useMemo(() => debounce(handle, 500), [])
  const throttledEventHandler = useMemo(() => throttle(handle, 25), [])

  useEffect(() => {
    document.addEventListener('mousemove', throttledEventHandler)
    // document.addEventListener('mousemove', debouncedEventHandler)
    return () => {
      document.removeEventListener('mousemove', throttledEventHandler)
      // document.removeEventListener('mousemove', debouncedEventHandler)
      throttledEventHandler.cancel()
      // debouncedEventHandler.cancel()
    }
  }, [])
  return mouse
}
