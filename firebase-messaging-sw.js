// Firebase Cloud Messaging — service worker
// Recibe notificaciones push cuando la app está cerrada o en segundo plano.
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyC4Kws78y5K3-1IuBibxCOo-a11ccuNYUE",
  authDomain: "misonrisa-citas.firebaseapp.com",
  projectId: "misonrisa-citas",
  storageBucket: "misonrisa-citas.firebasestorage.app",
  messagingSenderId: "601464011103",
  appId: "1:601464011103:web:e03150d9b86eb40a451eea"
});

const messaging = firebase.messaging();

// Notificación recibida en segundo plano
messaging.onBackgroundMessage(function(payload){
  const titulo = (payload.notification && payload.notification.title) || 'Mi Sonrisa';
  const opciones = {
    body: (payload.notification && payload.notification.body) || '',
    icon: 'favicon.png',
    badge: 'favicon.png',
    data: payload.data || {}
  };
  self.registration.showNotification(titulo, opciones);
});

// Al tocar la notificación, abre la app
self.addEventListener('notificationclick', function(event){
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type:'window', includeUncontrolled:true }).then(function(clientList){
      for(const client of clientList){
        if('focus' in client) return client.focus();
      }
      if(clients.openWindow) return clients.openWindow('./');
    })
  );
});
