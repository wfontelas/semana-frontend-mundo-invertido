
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCQlKvNve1nnJacz6fROWLU8qEUiTWFGNw",
    authDomain: "projeto-dio-mundoinverti-ce1a8.firebaseapp.com",
    projectId: "projeto-dio-mundoinverti-ce1a8",
    storageBucket: "projeto-dio-mundoinverti-ce1a8.appspot.com",
    messagingSenderId: "710768915681",
    appId: "1:710768915681:web:328903b3263f3e46b7f3a0",
    measurementId: "G-9RNMVVV0XY"
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  const analytics = getAnalytics(app)
  export default app
