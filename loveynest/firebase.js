import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAX3mT_3KmSuAZPQ7Hg3JEZrc09knB-2Yk",
  authDomain: "gifted-chat-f3214.firebaseapp.com",
  projectId: "gifted-chat-f3214",
  storageBucket: "gifted-chat-f3214.appspot.com",
  messagingSenderId: "400018660836",
  appId: "1:400018660836:web:4b6228b5ce6c3e1384fbf1"
};

let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app()
}
  
const db = app.firestore()

export {db};

