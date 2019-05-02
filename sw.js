// console.log('service Worker self', self);
self.skipWaiting();

self.addEventListener("fetch", event => {
  console.log(event.request.url)
  // return 'hello workie';
  // throw Error("error in fetch handler");
  // event.respondWith(fetch(event.request.url));
})

self.addEventListener("install", () => {
  console.log("new SW installed")
})


// self.addEventListener("fetch", event => {
//   console.log('event.request.url', event.request.url)
//   // fetch(event.request.url).then(result => console.log('fetch(event.request.url', result))
//   event.respondWith(fetch(event.request.url))
//   // event.respondWith(new Response("hello!"))
// })
//
// // self.skipWaiting()
// self.addEventListener("activate", () => {
//   console.log("new SW activated immediately 2")
// })


