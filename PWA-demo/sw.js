const CACHE_NAME = 'cache_v' + 1;
const CACHE_LIST = [
  '/',
  '/index.html',
  '/index.css',
  '/main.js',
  '/api/list',
  '/manifest.json',
  '/icon.png'
]

async function fetchAndSave (request) {
  let res = await fetch(request)
  let cloneRes = res.clone()
  let cache = await caches.open(CACHE_NAME)
  await cache.put(request, cloneRes)
  return res;
}

self.addEventListener('fetch', (e) => {
  // 拦截请求
  let url = new URL(e.request.url)
  // 静态资源不做拦截
  if (url.origin !== self.origin) {
    return
  }

  if (e.request.url.includes('/api')) {
    return e.respondWith(
      fetchAndSave(e.request).catch(res => {
        return caches.match(e.request)
      })
    )
  }

  e.respondWith(
    fetch(e.request).catch(res => {
      return caches.match(e.request)
    })
  )
})

async function preCache() {
  let cache = await caches.open(CACHE_NAME)
  await cache.addAll(CACHE_LIST)
  await self.skipWaiting()
}

self.addEventListener('install', (e) => {
  // 跳过等待，直接激活
  // e.waitUtil表示等待promise执行完成
    // 预先将缓存列表的数据缓存起来
  e.waitUntil(preCache())
})

async function clearCache() {
  let keys = await caches.keys();
  return Promise.all(keys.map(key => {
      if (key !== CACHE_NAME) {
          return caches.delete(key)
      }
  }))
}

// serviceWorker下一次才生效
self.addEventListener('activate', (e) => {
  // 让serviceWorker拥有控制权
  e.waitUntil(Promise.all([clearCache(), clients.claim()]))
})

self.addEventListener('push',function (e) {
  console.log('addEventListener push', e.data.text())
  self.registration.showNotification(e.data.text())
})