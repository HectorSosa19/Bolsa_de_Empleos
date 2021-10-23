import firebase from "firebase"

const firebaseConfig =({
  apiKey: "AIzaSyDQQrzU5PS8EtaIZ0xZqjt0xt6k1MZvaq0",
  authDomain: "auth-admin-36b64.firebaseapp.com",
  projectId: "auth-admin-36b64",
  storageBucket: "auth-admin-36b64.appspot.com",
  messagingSenderId: "841928425740",
  appId: "1:841928425740:web:6a8c4beb5ff6f4a2b10929"
  });
  
const app =firebase.initializeApp(firebaseConfig);

const db=app.firestore()
const auth=firebase.auth()

export {app,db,auth};