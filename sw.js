const CACHE_NAME = 'qa-quiz-v2';
const APP_SHELL = [
  './',
  './index.html',
  './style.css',
  './quiz.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/maskable-512.png'
];

// Icons are versioned by filename and safe to serve cache-first.
// Everything else (HTML/CSS/JS/manifest) is network-first so deploys
// reach installed PWA users immediately; the cache is only a fallback
// for offline use.
const CACHE_FIRST_PATHS = ['/icons/'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

function cacheResponse(request, response) {
  if (response && response.status === 200 && response.type === 'basic') {
    const copy = response.clone();
    caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
  }
  return response;
}

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const requestUrl = new URL(event.request.url);

  if (requestUrl.origin !== self.location.origin) {
    return;
  }

  const isCacheFirst = CACHE_FIRST_PATHS.some(path => requestUrl.pathname.includes(path));

  if (isCacheFirst) {
    event.respondWith(
      caches.match(event.request)
        .then(cached => cached || fetch(event.request).then(res => cacheResponse(event.request, res)))
    );
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(res => cacheResponse(event.request, res))
      .catch(() => caches.match(event.request)
        .then(cached => {
          if (cached) return cached;
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
          return undefined;
        }))
  );
});
