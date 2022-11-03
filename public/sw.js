self.addEventListener("install", event => {
  console.log("Service worker installed");
})
self.addEventListener("activate", event => {
  console.log("Service worker activated");
})

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("static-cache")
      .then(cache => {
        return cache.addAll([
          "/index.html",
        ])
      })
  )
})

self.addEventListener("fetch", event => {
  event.respondWith(caches.match(event.request)
    .then(response => response || fetch(event.request)
    )
  )
})