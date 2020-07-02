const cacheName = 'app-shell-v1.1';
const assets = [
  '/',
  '/index.html',
  '/js/main.bundle.js',
  'https://fonts.googleapis.com/css?family=Bangers&display=swap'
];

// Listen for install event
self.addEventListener('install', event => {
  console.log('service worker has been installed');

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        console.log('caching assets');
        return cache.addAll(assets);
      })
  )
});

// Listen for activate event
self.addEventListener('activate', event => {
  // console.log('service worker has been activated');

  // Delete old cache
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== cacheName) {
            return caches.delete(key);
          }
        })
      )
    })
  );
});

// Install event
self.addEventListener('fetch', event => {
  // console.log('fetch event', event);

  event.respondWith(
    caches.match(event.request)
      .then(cacheRes => {
        return cacheRes || fetch(event.request);
    })
  )
});