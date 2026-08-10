// Mi Sonrisa by Dentilike — v10
const CACHE_NAME = "misonrisa-v10";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./avatar-dr.png",
  "./avatar-ok.png",
  "./avatar-asustado.png",
  "./favicon.png",
  "./logo-misonrisa-icon.png",
  "./logo-dentilike.png",
  "./logo-dentilike-compact.png",
  "./icon-maskable.png",
  "./og-image.png"
];

self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.all(
        ASSETS.map((url) => cache.add(url).catch(() => {}))
      )
    )
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then((cached) => {
      const fetchPromise = fetch(e.request)
        .then((res) => {
          if (res && res.status === 200) {
            const clone = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
          }
          return res;
        })
        .catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
