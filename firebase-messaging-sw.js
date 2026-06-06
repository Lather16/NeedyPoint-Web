importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

const firebaseConfig = {
  apiKey: 'AIzaSyBsm9uFY4y-f3AwKsCZP0uUtWUPuj0CPtg',
  appId: '1:929559891175:web:a5bd3e5e11d435342c2642',
  messagingSenderId: '929559891175',
  projectId: 'needypoint',
  authDomain: 'needypoint.firebaseapp.com',
  storageBucket: 'needypoint.firebasestorage.app',
  databaseURL: 'https://needypoint-default-rtdb.asia-southeast1.firebasedatabase.app',
  measurementId: 'G-C3YHXFRJBK'
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/favicon.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
