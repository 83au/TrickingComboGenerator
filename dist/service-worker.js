const cacheName = 'app-shell-v1.8'; const assets = ['/', '/index.html', '/js/main.be5ca9eb46323ab49320.bundle.js', 'main.be5ca9eb46323ab49320.css', '/assets/icon-spritesheet.svg', 'https://fonts.googleapis.com/css?family=Bangers&display=swap']; self.addEventListener('install', e => { e.waitUntil(caches.open(cacheName).then(e => (console.log('caching assets'), e.addAll(assets)))); }), self.addEventListener('activate', e => { console.log('Service worker activated'), e.waitUntil(caches.keys().then(e => Promise.all(e.map(e => { if (e !== cacheName) return caches.delete(e); })))); }), self.addEventListener('fetch', e => { e.respondWith(caches.match(e.request).then(s => s || fetch(e.request))); });
