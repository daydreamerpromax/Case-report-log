const C="posting-log-v2";
const FILES=["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png","icon-maskable-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(FILES)));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  const r=e.request;
  if(r.method!=="GET")return;
  const u=new URL(r.url);
  const fonts=u.hostname==="fonts.googleapis.com"||u.hostname==="fonts.gstatic.com";
  if(u.origin!==location.origin&&!fonts)return;           // GitHub sync calls go straight to the network
  if(fonts){                                              // fonts: cache first so the app looks the same offline
    e.respondWith(caches.match(r).then(m=>m||fetch(r).then(x=>{const c=x.clone();caches.open(C).then(k=>k.put(r,c));return x})));
    return;
  }
  e.respondWith(fetch(r).then(x=>{const c=x.clone();caches.open(C).then(k=>k.put(r,c));return x})   // app files: network first, cache when offline
    .catch(()=>caches.match(r).then(m=>m||caches.match("index.html"))));
});
