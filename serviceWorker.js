---
layout: null
---
// importScripts('js/vendor/serviceworker-cache-polyfill.js');

var cacheName = 'lumirpg.tk-cache-v1';
var filesToCache = [
  // Stylesheets
  // Wouldn't need it, it's in the head of every file
  // '/assets/main.css',

  // Pages and assets
  {% for page in site.html_pages %}
  '{{ page.url }}',
  {% endfor %}
  {% for icon in site.static_files %}
    {% if icon.name contains 'apple' or icon.name contains 'android' or icon.name contains 'favicon' or icon.name contains 'ms-icon' %}
      '{{ icon.path }}',
    {% endif %}
  {% endfor %}

  {% for post in site.posts %}
    '{{ post.url }}',
  {% endfor %}

];
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      if (response) {
        console.log('[*] Fornecendo do cache: ' + event.request.url);
        return response;
      };

      console.log('[*] Trazendo: ' + event.request.url);
      return fetch(event.request);
    })
  );
});
