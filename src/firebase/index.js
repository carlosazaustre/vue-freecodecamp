import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDd0NZkDVD0xmrfzAzB1JByCyl_KVzVcKE",
  authDomain: "vue-freecodecamp.firebaseapp.com",
  databaseURL: "https://vue-freecodecamp.firebaseio.com",
  projectId: "vue-freecodecamp",
  storageBucket: "vue-freecodecamp.appspot.com",
  messagingSenderId: "914023537893"
};

const app = firebase.initializeApp(config);

export default app;
