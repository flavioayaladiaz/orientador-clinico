/* UrgenCheck — service worker
   Estrategia: cache-first con actualización en segundo plano.
   Al subir una nueva versión, cambia CACHE_VERSION y todos los
   dispositivos se actualizarán en su próxima conexión. */

const CACHE_VERSION = "urgencheck-v0.3.1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./checklist-sepsis_4.html",
  "./checklist-politrauma_2.html",
  "./checklist-fibrinolisis.html",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-512-maskable.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_VERSION).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((cached) => {
      // Actualización silenciosa: responde desde caché, refresca en segundo plano
      const refresh = fetch(e.request)
        .then((res) => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(CACHE_VERSION).then((c) => c.put(e.request, copy));
          }
          return res;
        })
        .catch(() => cached);
      return cached || refresh;
    })
  );
});
