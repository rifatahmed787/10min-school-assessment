/* eslint-disable no-undef*/
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("../firebase-messaging-sw.js")
    .then(function (registration) {
      console.log("Registration successful, scope is:", registration.scope);
    })
    .catch(function (err) {
      console.log("Service worker registration failed, error:", err);
    });
}

firebase.initializeApp({
  apiKey: "AIzaSyAs_SgVFoyvsAFEmPhwL8tXTriv-4Atkcw",
  authDomain: "push-notification-b0558.firebaseapp.com",
  projectId: "push-notification-b0558",
  storageBucket: "push-notification-b0558.appspot.com",
  messagingSenderId: "959272682731",
  appId: "1:959272682731:web:c40f027152d323d2b3aaae",
  measurementId: "G-V7WBX241HH",
});

const initMessaging = firebase.messaging();

initMessaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/firebase-logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
  
  self.clients.matchAll().then(clients => {
    console.log("Clients matched in SW:", clients); // Log clients to verify
    clients.forEach(client => {
      console.log("Sending message to client:", client);
      client.postMessage({
        msg: "backgroundMessage",
        data: payload,
      });
    });
  });
  
});