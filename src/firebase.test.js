// firebase.test.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

// Usando la configuración real de tu proyecto de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBYy3QiP94OP-Arb3Xv0aHygjTYIP5TLMk",
  authDomain: "leakplanting.firebaseapp.com",
  projectId: "leakplanting",
  storageBucket: "leakplanting.firebasestorage.app",
  messagingSenderId: "725588759111",
  appId: "1:725588759111:web:cb92ec657d726872c0d762",
  measurementId: "G-EY9LGN065L"
};

// Inicializamos la app de Firebase
const app = initializeApp(firebaseConfig);

describe('Firebase Initialization Tests', () => {
  let auth;
  let db;
  let googleProvider;

  beforeEach(() => {
    // Inicializamos los servicios de autenticación y Firestore
    auth = getAuth(app);
    db = getFirestore(app);
    googleProvider = new GoogleAuthProvider();

    // Establecemos los parámetros personalizados para GoogleAuthProvider
    googleProvider.setCustomParameters({ prompt: 'select_account' });

    // Conectamos los emuladores si los estás utilizando (descomenta si es necesario)
    // connectAuthEmulator(auth, "http://localhost:9099");
    // connectFirestoreEmulator(db, "localhost", 8080);
  });

  test('should initialize Firebase app', () => {
    expect(app).toBeTruthy();
    expect(auth).toBeTruthy();
    expect(db).toBeTruthy();
    expect(googleProvider).toBeTruthy();
  });

  test('should set custom parameters for Google auth provider', () => {
    // Aquí verificamos que el parámetro "prompt" esté correctamente configurado
    expect(googleProvider.getCustomParameters().prompt).toBe('select_account');
  });
});