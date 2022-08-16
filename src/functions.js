const DURATION = 25
const throttle = (function () {
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
    throttle(() => {
      callback(event)
    })
  }
}
