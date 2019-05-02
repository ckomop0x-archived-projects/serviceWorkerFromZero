console.log('service Worker self', self);

self.addEventListener("fetch", event => {
  console.log(event)
})

self.skipWaiting()
self.addEventListener("activate", () => {
  console.log("new SW activated immediately 2")
})
