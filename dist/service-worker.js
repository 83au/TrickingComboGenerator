// Listen for install event
self.addEventListener('install', event => {
  console.log('service worker has been installed');
});

// Listen for activate event
self.addEventListener('activate', event => {
  console.log('service worker has been activated');
});

// Install event
self.addEventListener('fetch', event => {
  console.log('fetch event', event);
});