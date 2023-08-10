const staticAssets = [
  'index.html',
  'css/bs5.css',
  'css/custom.css',
  'js/bs5.js',
  'js/jq.js',
  'signup.html',
  'signin.html',
  'otp.html',
  'profile.html',
  'accounts.html',
  'dashboard.html',
  'menu.html',
  'password.html',
  'images/logo.png'
];

self.addEventListener('install', async event => {
  const cache = await caches.open('ap-static');
  cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
  const req = event.request;
  //event.respondWith(cacheFirst(req))
  const url = new URL(req.url);

  if (url.origin === location.orgin) {
      event.respondWith(cacheFirst(req));
  } else {
      event.respondWith(networkFirst(req));
  }
});

async function networkFirst(req) {
  const cache = await caches.open('ap-dynamic');
  try {
      const res = await fetch(req);
      cache.put(req, res.clone());
      return res;
  } catch {
      const cachedResponses = await cache.match(req);
      return cachedResponses || await caches.match('index.html');
  }
}
async function cacheFirst(req) {
  const cachedResponse = await caches.match(req);
  return cachedResponse || fetch(req);
}