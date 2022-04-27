self.addEventListener("install", (event) => {
  console.log("V1 installing...");

  // add cache a matan
  event.waitUntil(
    caches.open("static-v1").then((cache) => cache.add("/image1.png"))
  );
});

self.addEventListener("activate", (event) => {
  console.log("V1 now ready to handle fetches! (=^-^=)");
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // serve the matan from the cache if the request is
  // same-origin and the path is "/image2.png"
  if (url.origin == location.origin && url.pathname == "/image2.png") {
    event.respondWith(caches.match("/image1.png"));
  }
});
