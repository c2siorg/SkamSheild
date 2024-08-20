import { initializeApp } from "firebase/app";
import {
  getAuth,
  connectAuthEmulator,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getStorage, connectStorageEmulator, ref } from "firebase/storage";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

const firebaseOptions = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

const firebaseApp = initializeApp(firebaseOptions);

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const functions = getFunctions(firebaseApp);

if (__DEV__) {
  console.log(
    "Running in development mode -- connecting to local Firebase emulators"
  );
  connectAuthEmulator(auth, "http://localhost:9098");
  connectFirestoreEmulator(firestore, "localhost", 8082);
  connectFunctionsEmulator(functions, "localhost", 5003);
  connectStorageEmulator(storage, "localhost", 9199);
}

const storageRef = ref(storage);
const googleProvider = new GoogleAuthProvider();

export {
  firebaseApp,
  auth,
  firestore,
  storage,
  functions,
  storageRef,
  googleProvider,
};
export default firebaseApp;
