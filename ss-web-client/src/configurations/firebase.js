import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getStorage, connectStorageEmulator, ref } from "firebase/storage";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

const firebaseOptions = {
  apiKey: "AIzaSyDZKw5wXMkpHIjl31Nh3jGpCWlPZbI_Ed4",
  authDomain: "skam-sheild.firebaseapp.com",
  projectId: "skam-sheild",
  storageBucket: "skam-sheild.appspot.com",
  messagingSenderId: "1060672634364",
  appId: "1:1060672634364:web:4b6a2aadfc79e6524e8679",
  measurementId: "G-2K7T4FFK5M",
};

const firebaseApp = initializeApp(firebaseOptions);

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const functions = getFunctions(firebaseApp);

if (window.location.hostname === "localhost") {
  console.log(
    "testing locally -- hitting local functions and firestore emulators"
  );
  connectAuthEmulator(auth, "http://localhost:9098");
  connectFirestoreEmulator(firestore, "localhost", 8082);
  connectFunctionsEmulator(functions, "localhost", 5003);
  connectStorageEmulator(storage, "localhost", 9199);
}

const storageRef = ref(storage);

export { firebaseApp, auth, firestore, storage, functions, storageRef };
export default firebaseApp;
