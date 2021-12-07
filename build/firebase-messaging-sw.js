/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/7.21.1/firebase-app.js');
// importScripts('https://www.gstatic.com/firebase/7.17.1/firebase-analytics.js');
// importScripts('https://www.gstatic.com/firebase/init.js');
importScripts(
  'https://www.gstatic.com/firebasejs/7.21.1/firebase-messaging.js',
);

firebase.initializeApp({
  apiKey: 'AIzaSyD6M4Qgp4QzRf1PMYCsOTpDuVYSm0GAFbU',
  appId: '1:1081950831698:web:0ff6ad89d040347363cb8b',
  projectId: 'wetaxi-marketplace',
  messagingSenderId: '1081950831698',
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  console.log(payload);
  const { title, message, icon } = payload.data;
  new Notification(title, {
    message,
    icon,
  }).onclick = event => {
    event.preventDefault();
    window.location = payload.notification.click_action;
  };
});

// Old Code
// firebase.initializeApp({
//   apiKey: 'AIzaSyD6M4Qgp4QzRf1PMYCsOTpDuVYSm0GAFbU',
//   appId: '1:1081950831698:web:0ff6ad89d040347363cb8b',
//   projectId: 'wetaxi-marketplace',
//   messagingSenderId: '1081950831698',
// });

// firebase.messaging().onBackgroundMessage(payload => {
//   console.log('payload', payload);
// });

// firebase.messaging().setBackgroundMessageHandler(payload => {
//   console.log("payload", payload)
//   self.ServiceWorkerRegistration.showNotification(title)
// })

// self.addEventListener('notificationclick', function (event) {
//   console.log('event', event);
//   event.notification.close();
//   clients.openWindow('https://youtu.be/PAvHeRGZ_lA');
// });

// self.onnotificationclick = function (event) {
//   console.log('self.onnotificationclick -> event', event);
//   console.log('On notification click: ', event.notification.tag);
//   event.notification.close();

//   // This looks to see if the current is already open and
//   // focuses if it is
//   event.waitUntil(
//     clients
//       .matchAll({
//         type: 'window',
//       })
//       .then(clientList => {
//         for (let i = 0; i < clientList.length; i += 1) {
//           const client = clientList[i];
//           if (client.url === '/' && 'focus' in client) return client.focus();
//         }
//         if (clients.openWindow) return clients.openWindow('/');
//       }),
//   );
// };

// self.addEventListener('notificationclick', function (event) {
//   console.log('event', event);
//   let url = 'https://example.com/some-path/';
//   event.notification.close(); // Android needs explicit close.
//   event.waitUntil(
//     clients.matchAll({ type: 'window' }).then(windowClients => {
//       // Check if there is already a window/tab open with the target URL
//       for (var i = 0; i < windowClients.length; i++) {
//         var client = windowClients[i];
//         // If so, just focus it.
//         if (client.url === url && 'focus' in client) {
//           return client.focus();
//         }
//       }
//       // If not, then open the target URL in a new window/tab.
//       if (clients.openWindow) {
//         return clients.openWindow(url);
//       }
//     }),
//   );
// });

// messaging.onBackgroundMessage(async payload => {
//   console.log('payload', payload);
//   // console.log('payload', payload);
//   const { title, message, icon, clickAction } = payload.data;
//   new Notification(title, {
//     message,
//     icon,
//   }).onclick = event => {
//     event.preventDefault();
//     window.location = clickAction;
//   };
//   // showNotification(title, message, icon, clickAction);
//   // const img = '/images/jason-leung-HM6TMmevbZQ-unsplash.jpg';
//   // const text = 'Take a look at this brand new t-shirt!';
//   // const title = 'New Product Available';
//   // const options = {
//   //   body: text,
//   //   icon: '/images/jason-leung-HM6TMmevbZQ-unsplash.jpg',
//   //   vibrate: [200, 100, 200],
//   //   tag: 'new-product',
//   //   image: img,
//   //   badge: 'https://spyna.it/icons/android-icon-192x192.png',
//   //   actions: [
//   //     {
//   //       action: 'Detail',
//   //       title: 'View',
//   //       icon: 'https://via.placeholder.com/128/ff0000',
//   //     },
//   //   ],
//   // };
// navigator.serviceWorker.ready.then(function(serviceWorker) {
//   serviceWorker.showNotification(title, options);
// });
// });
