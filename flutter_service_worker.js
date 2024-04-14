'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"version.json": "009c9e65172e010890f7f65fde438006",
"assets/assets/pokeball.png": "a85f4fe0ab90088f3dc252ae3d10c670",
"assets/assets/mweather.png": "152188a6f5b931accadfbc6526a5b936",
"assets/assets/oneloyal.png": "83954961f66327158841a16f64b6ffe5",
"assets/assets/oneloyal_business.png": "67f6a668c7341264aa30495059a76970",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "e7e93bbc553ecd2811373943c03df024",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2c2c599392bf3a6bda39169fbb1985b3",
"assets/fonts/MaterialIcons-Regular.otf": "beb6a137a4277d84fe7407a8a7152d4f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "3c7a8a0e530775bbcf8c76d09bef5b50",
"assets/AssetManifest.bin": "74f9934f96c669056b8447d51a1522c5",
"assets/AssetManifest.bin.json": "942be271f5612f8835eed95a1ba79a4b",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/NOTICES": "c5561e2c16f98e54fb51330fe0a868d2",
"assets/favicon.png": "7ee56aa64609b39a57ff52f02354836f",
"assets/mweather.png": "c7e62ad654143a618d8353ac27efc636",
"assets/oneloyal.png": "83954961f66327158841a16f64b6ffe5",
"assets/oneloyal_business.png": "67f6a668c7341264aa30495059a76970",
"assets/pokeball.png": "a85f4fe0ab90088f3dc252ae3d10c670",
"assets/zentyper.png": "1cb363f0a31183f14f206970f5c7bda5",
"favicon.png": "7ee56aa64609b39a57ff52f02354836f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/config": "9ed04f7a2ced480836d692e5d0b87e6c",
".git/refs/heads/master": "3d251b92e760a768314819d6de10b62b",
".git/refs/remotes/origin/master": "3d251b92e760a768314819d6de10b62b",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/objects/pack/pack-6aed5bc88cd70aaa89a9587e9299665163283325.pack": "2c8f336e2088da0acf234e5026c84837",
".git/objects/pack/pack-6aed5bc88cd70aaa89a9587e9299665163283325.rev": "f0634314f955c745e124a97ee5506727",
".git/objects/pack/pack-6aed5bc88cd70aaa89a9587e9299665163283325.idx": "ce6467fef75fea01480c7290cc4f9f7b",
".git/objects/45/24154629336b1f444868ada37b3f1c0f6ad4a0": "478d23f61616a837800d562974130ab4",
".git/objects/9c/c2d2fe3ba7297d21119c33de2f70e7c94aa055": "0b3460d3bbbc1b7c00d5e3bf5fad95ca",
".git/objects/c4/e94e17f2ce9efb18c1f07c40f0efd6600a1cd6": "e23cc25352c1e7cb1bc8a1d0dbb87593",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/1e/3d58c5861bc4f03e3db36f72cc4952e786ebd0": "5f7e9fc8a763b566acb85b02919a0599",
".git/objects/bb/7c84aad1a953168171c3196a4e525565b9d485": "7322d3b82dc81984d0baf43ba7ea1a70",
".git/FETCH_HEAD": "3b5b0127d81e5192662fc14eb3421a1c",
".git/logs/refs/remotes/origin/master": "0b948d09ccf24f62ef3a6fa7ba5ec061",
".git/logs/refs/heads/master": "ef6e99bb5bd436de1ab4c2a163f265f9",
".git/logs/HEAD": "ef6e99bb5bd436de1ab4c2a163f265f9",
".git/index": "62ca2b55d15609926457338cd33ec749",
".git/COMMIT_EDITMSG": "d25aa9369a2b156a7d7ee6a68ae7cbad",
".git/ORIG_HEAD": "92b7041c801e3e3ad4b97a364901b508",
"index.html": "a3c6e137d4f51ede35275fef60eb3eed",
"/": "a3c6e137d4f51ede35275fef60eb3eed",
"main.dart.js": "a52f8c6aec107b7d2dccd086200e913f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
