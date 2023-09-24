import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyARk2LszRM7ibjHOql-ChU6I4uSAmnOtBs",
    authDomain: "netflix-clone-95046.firebaseapp.com",
    projectId: "netflix-clone-95046",
    storageBucket: "netflix-clone-95046.appspot.com",
    messagingSenderId: "965289705248",
    appId: "1:965289705248:web:68d99764e97253d0512145"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth }
  export default db;