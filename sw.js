console.log('service Worker self', self);

self.addEventListener("fetch", event => {
  // console.log(event)
  console.log('event.request.url', event.request.url)
  fetch(event.request.url).then(result => console.log('fetch(event.request.url', result))
  event.respondWith(fetch(event.request.url))
  // event.respondWith(new Response("hello!"))
})

// self.skipWaiting()
self.addEventListener("activate", () => {
  console.log("new SW activated immediately 2")
})
