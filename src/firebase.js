import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCh1MXCT3GFbTTAlopiNtS5-GS6OLy5Vh0",
    authDomain: "reacttododb-antoine.firebaseapp.com",
    databaseURL: "https://reacttododb-antoine-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "reacttododb-antoine",
    storageBucket: "reacttododb-antoine.appspot.com",
    messagingSenderId: "1036400174129",
    appId: "1:1036400174129:web:124037d63089ac947da110"
  };

  firebase.initializeApp(firebaseConfig)
  firebase.analytics()

  export default firebase