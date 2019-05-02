if (navigator.serviceWorker) {
  navigator.serviceWorker.register("sw.js").then((registration) => {
    const sw = registration.installing;
    sw.addEventListener("statechange", event => {
      console.log("state changed to: ", event.target.state)
    })
  })
  registration.addEventListener("updatefound", event => {
    console.log(event.target.installing)
  })
  console.log('navigator.serviceWorker', navigator.serviceWorker)

  navigator.serviceWorker.ready.then(registration => {
    console.log('SW activated: ', registration.active)
  })

  console.log('navigator.serviceWorker.controller', navigator.serviceWorker.controller)

  navigator.serviceWorker.addEventListener('controllerchange', () => {
    console.log("the new Service Worker has taken over")
  })
}
