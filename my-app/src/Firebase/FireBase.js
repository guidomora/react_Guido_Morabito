import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  getFirestore,
  query,
  where,
  addDoc,
  orderBy,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDQXQWed7pzUQKmbVQnJ8meDPu_b8FG-M",
  authDomain: "floreria-morabito.firebaseapp.com",
  projectId: "floreria-morabito",
  storageBucket: "floreria-morabito.appspot.com",
  messagingSenderId: "670367507633",
  appId: "1:670367507633:web:3aeb2d2207212425656e90",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getProductos = () => {
  const productosList = collection(db, "items");
  const q = query(productosList, orderBy("precio", "desc"));
  return getDocs(q);
};

export const getDetail = async (productoId) => {
  if (!productoId) throw new Error("Missing productId");

  return (await getDoc(doc(db, "items", productoId))).data();
};

export const getItemsFiltrados = (categoria) => {
  const colRef = query(collection(db, "items"));
  const q = query(colRef, where("tipo", "==", categoria), orderBy("precio", "desc"));
  return getDocs(q);
};

export const crearOrdenContext = async (orden) => {
  const docRef = await addDoc(collection(db, 'orders'),orden);
  console.log(docRef.id)
  return docRef.id;
};


