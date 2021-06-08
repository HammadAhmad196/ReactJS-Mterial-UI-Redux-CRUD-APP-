import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyB5-1Qafu4zPkltsljs3CymtFph0r2rKO0",
  authDomain: "react-firebase-auth-5399e.firebaseapp.com",
  projectId: "react-firebase-auth-5399e",
  storageBucket: "react-firebase-auth-5399e.appspot.com",
  messagingSenderId: "687542896446",
  appId: "1:687542896446:web:c028ba35efedef69658e6f"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;