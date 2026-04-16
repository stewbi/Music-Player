const CACHE_NAME = 'coverflow-offline-v1';
const urlsToCache = [
  './',
  'MediaPlayer.html',
  'icon.png' // Make sure you have your app icon in the folder!
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});