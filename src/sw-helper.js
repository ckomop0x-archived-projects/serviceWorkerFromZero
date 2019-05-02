navigator.serviceWorker.register("/game/kolohe.js").then((registration) => {
  console.log(registration)
})

navigator.serviceWorker.register("/game/kolohe.js").then((registration) => {
  console.log(registration.installing)
})

navigator.serviceWorker.register("/game/kolohe.js").then((registration) => {
  console.log(registration.active)
})

navigator.serviceWorker.register("/game/kolohe.js").then((registration) => {
  const kolohe = registration.installing;
  kolohe.addEventListener("statechange", event => {
    console.log("state changed to: ", event.target.state)
  })

  registration.addEventListener("updatefound", event => {
    console.log(event.target.installing)
  })
})



navigator.serviceWorker.ready




navigator.serviceWorker.register("/game/kolohe.js").then((registration) => {
  console.log(registration.waiting)
})

self.addEventListener("install", () => {
  console.log("installed")
})

self.addEventListener("activate", () => {
  console.log("activated")
})

navigator.serviceWorker.register("/game/kolohe.js")
navigator.serviceWorker.ready.then(registration => {
  console.log(navigator.serviceWorker.controller)
})

navigator.serviceWorker.addEventListener('controllerchange', () => {
  console.log("the new Service Worker has taken over")
})

console.log(navigator.serviceWorker.controller)

self.addEventListener("fetch", event => {
  console.log(event)
})
