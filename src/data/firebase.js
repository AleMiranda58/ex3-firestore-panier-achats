import fbAppli from 'firebase/app';
import 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBXrvPDiqr6jXmeMFe9HQNR3m5mXpGFhzw",
  authDomain: "pvt-h21-29626.firebaseapp.com",
  projectId: "pvt-h21-29626",
  storageBucket: "pvt-h21-29626.appspot.com",
  messagingSenderId: "198365929320",
  appId: "1:198365929320:web:b2f9494ad9b3f79794c0dd",
  measurementId: "G-ZGV8G0YH8F"
};

// Initialiser Firebase
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
const bd = fbAppli.firestore();
/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) la référence à "bd" pour pouvoir l'utiliser dans le composant ListeProduits
export default db;