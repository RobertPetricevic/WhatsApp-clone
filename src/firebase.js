import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAIyyrcJfKanfN2JFzDjJwXNnzLegXrjo0",
  authDomain: "whatsapp-a59f9.firebaseapp.com",
  databaseURL: "https://whatsapp-a59f9.firebaseio.com",
  projectId: "whatsapp-a59f9",
  storageBucket: "whatsapp-a59f9.appspot.com",
  messagingSenderId: "928685908648",
  appId: "1:928685908648:web:4a5088b034782c8bb3589d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
