// Offline fallback part 1
import { setCatchHandler, setDefaultHandler } from "workbox-routing";
import { NetworkOnly } from "workbox-strategies";

const pageFallback = "offline.html";

setDefaultHandler(new NetworkOnly());

self.addEventListener("install", (event) => {
  const files = [pageFallback];

  event.waitUntil(
    self.caches
      .open("workbox-offline-fallbacks")
      .then((cache) => cache.addAll(files))
  );
});
