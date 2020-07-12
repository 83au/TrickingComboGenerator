const cacheName = 'app-shell-v1.2';
const assets = [
  '/',
  '/index.html',
  '/js/main.4b5d3216542b1a87abad.bundle.js',
  '/main.4b5d3216542b1a87abad.css',
  'https://fonts.googleapis.com/css?family=Bangers&display=swap'
];


// Listen for install event
self.addEventListener('install', event => {
  // Cache assets
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
  console.log('Service worker activated');

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


// Listen for fetch and intercept
self.addEventListener('fetch', event => {
  // Check cache for request
  event.respondWith(
    caches.match(event.request)
      .then(cacheRes => {
        return cacheRes || fetch(event.request);
    })
  )
});


