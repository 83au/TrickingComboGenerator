const cacheName = 'app-shell-v2.1'; const assets = ['/', '/index.html', '/js/main.2a66168aeb906065e762.bundle.js', '/assets/icon-spritesheet.svg', 'https://fonts.googleapis.com/css?family=Bangers&display=swap']; self.addEventListener('install', e => { e.waitUntil(caches.open(cacheName).then(e => (console.log('caching assets'), e.addAll(assets)))); }), self.addEventListener('activate', e => { console.log('Service worker activated'), e.waitUntil(caches.keys().then(e => Promise.all(e.map(e => { if (e !== cacheName) return caches.delete(e); })))); }), self.addEventListener('fetch', e => { e.respondWith(caches.match(e.request).then(s => s || fetch(e.request))); });
