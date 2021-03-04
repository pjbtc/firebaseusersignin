  import  firebase from 'firebase';
  import "firebase/auth";
  
  var firebaseConfig = {
    apiKey: "AIzaSyCiK8Sxg33xS5eMpEwHDh1P5Pe7rEH0uUk",
    authDomain: "logintest-63e4b.firebaseapp.com",
    projectId: "logintest-63e4b",
    storageBucket: "logintest-63e4b.appspot.com",
    messagingSenderId: "527328771418",
    appId: "1:527328771418:web:4edf05deb741ba7d584763"
  };
  // Initialize Firebase
   const Fire =firebase.initializeApp(firebaseConfig)

   export default Fire;