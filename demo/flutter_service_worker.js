'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "3338200670f496e63b191de9d657ee81",
"index.html": "3fce32d96f87df0f5f5bed9c4e82f6ea",
"/": "3fce32d96f87df0f5f5bed9c4e82f6ea",
"main.dart.js": "42f4ac984a2fa1e6ece67b48fa28951f",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a410dc6f6f967c86cb3776dd77f9ae54",
"assets/AssetManifest.json": "d2046b98e9b0ac1c9ca38dae7b5c50a5",
"assets/NOTICES": "658775b0b41aac4be05d5a63a4ef2104",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/dicts/g_defs.txt": "1a1544dfde842b993678c9828cdbdc9d",
"assets/assets/dicts/f_defs.txt": "14363915e36cdd3a10bc647282004246",
"assets/assets/dicts/m_defs.txt": "2bea2ee9277fa8792239f55fd0062038",
"assets/assets/dicts/l_defs.txt": "9aea73434b43f9273e6a86302f4206d4",
"assets/assets/dicts/s_defs.txt": "d6ca6100ada0825de8bee51f851f6fdd",
"assets/assets/dicts/r_defs.txt": "5ebe147ec44991a155f6df0f14eb0808",
"assets/assets/dicts/demo.dic": "3bdb69044154c7d454cd443f100abc23",
"assets/assets/dicts/y_defs.txt": "e4b34c219fdebccc8385967162e722d9",
"assets/assets/dicts/x_defs.txt": "c1699062e7fd6050d146eb27cf0ae3bc",
"assets/assets/dicts/t_defs.txt": "b16c20d3507dc4d78d5ffdb5b6dd4113",
"assets/assets/dicts/u_defs.txt": "4a000561c7f9ce6ca3016d9e421fd7d9",
"assets/assets/dicts/a_defs.txt": "17fa815fd41696e8f5b1b7f625d2839d",
"assets/assets/dicts/j_defs.txt": "44c3046ae1a59187e1683501397f2db4",
"assets/assets/dicts/k_defs.txt": "5eee1b964f4b8e2df85871e645ecd65b",
"assets/assets/dicts/z_defs.txt": "3e38034e010529d26b2bb35b350754d9",
"assets/assets/dicts/p_defs.txt": "32cc42e7ec9107fcf2c5bd22d9002634",
"assets/assets/dicts/q_defs.txt": "c57523a20f88a87b50b374ce8d134b8f",
"assets/assets/dicts/n_defs.txt": "c87945c463f9665bc5fe1cfd32fb6c08",
"assets/assets/dicts/o_defs.txt": "64e6df80df48953f97fb246eb018142c",
"assets/assets/dicts/d_defs.txt": "6850fce6aa7cdff968468908d967d6b4",
"assets/assets/dicts/e_defs.txt": "5b60b2d582859be6fb9317a6df9717fd",
"assets/assets/dicts/mywords.txt": "b2113e227e72f4f03920d1137f0c1147",
"assets/assets/dicts/i_defs.txt": "7d89220523b53ebca62c54ded7236e2c",
"assets/assets/dicts/h_defs.txt": "614c8f25a46a71af335ff3d4343ece24",
"assets/assets/dicts/c_defs.txt": "976ad7ad86a25afed2d2e74184d83368",
"assets/assets/dicts/b_defs.txt": "5505b22b6a3a012f87752b3e4fe7f1fd",
"assets/assets/dicts/w_defs.txt": "c20b9c1a3f9aee7b58d7c1e2b93f23a7",
"assets/assets/dicts/v_defs.txt": "305497c4645b7479b3f71bf832178225",
"assets/assets/help/crossword.md": "a81d8fa7cb7abaf4dadc51603d9c0f73",
"assets/assets/help/infinit.png": "ae713b52ef4e85c4c1ed8a28fffdab78",
"assets/assets/help/suffix.md": "724c919a78b53a5995638b41a8c0dc31",
"assets/assets/help/advanced.md": "2faeb8112490981e4669d5bd8001dc57",
"assets/assets/help/prefix.md": "c6d1e93b199a00c344ba2a403960b8e7",
"assets/assets/help/cryptogram.md": "0547c02cf9d25f0ac4750a7e4d669b38",
"assets/assets/help/lite-defs.md": "e2edbf1ae1c35d8d3d1282d08e4e97a7",
"assets/assets/help/anagram.md": "e5d51b92c0c1f8a7cf68ecb079276807",
"assets/assets/help/about.md": "7b8da17032c098d14cde82ebd09afa8b",
"assets/assets/help/lite-advanced.md": "a2307e03fc53b92055ecb81c0939f9d0",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
