'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "1024.png": "d80910afad18acb34b5eea0a837bc7a7",
"assets/AssetManifest.json": "6e9d159bea854be178c61faa18323cda",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/images/dice1.png": "5e0580134cde323cc6e2d54254b1a605",
"assets/images/dice2.png": "524559a3d0e61efa7b8a165bd2bad0da",
"assets/images/dice3.png": "683bc715f147a48b2e2dcabf2d573a05",
"assets/images/dice4.png": "3c7e0c5d05aeaa567bb90faf18f79f38",
"assets/images/dice5.png": "ae4a1c88865e22a54c7aeb91f18db784",
"assets/images/dice6.png": "2d7642d5229bb083f5e59cf1cee4aa28",
"assets/LICENSE": "7f1df1ee47854388e684afc0845ea820",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"debug.log": "ef6e555473b7ae516b202c0969c68fee",
"favicon.png": "be845b2f4684105cbe366646247ccf40",
"icons/Icon-192.png": "c00cbd48118591a68c764a12cbb592b1",
"icons/Icon-512.png": "8dc4e54729f86d7da975ac4bca0bb24e",
"index.html": "83f23a1d9d1f33aad7ea75095358442b",
"/": "83f23a1d9d1f33aad7ea75095358442b",
"main.dart.js": "e485102bfff64c0092fc8838ffbfd0ea",
"manifest.json": "7e0c0861a5475dc5d1e0edb3efb9a938"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
