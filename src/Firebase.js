import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDuEadA7JVjjNgIaOcQZACQB7nq-WBNPiw",
  authDomain: "foodpicker-50f7b.firebaseapp.com",
  databaseURL: "https://foodpicker-50f7b.firebaseio.com",
  projectId: "foodpicker-50f7b",
  storageBucket: "foodpicker-50f7b.appspot.com",
  messagingSenderId: "59468916442",
  appId: "1:59468916442:web:bfc6a1a85621981b2a27e3"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
