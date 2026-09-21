const CACHE_NAME = "adryvo-v1";

const FILES_TO_CACHE = [
  "/adryvo-website/",
  "/adryvo-website/index.html",
  "/adryvo-website/22north.jpg",
  "/adryvo-website/footwear.jpg",
  "/adryvo-website/manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
