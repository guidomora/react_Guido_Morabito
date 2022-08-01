import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  getFirestore,
  query,
  where,
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



export const getProd = (categoriaId) => {
  if (categoriaId){getProductosPorCategoria(categoriaId)
  } else return getProductos
};

export const getProductos = () => {
  const productosList = collection(db, "items");
  const q = query(productosList);
  return getDocs(q)
};


export const getProductosPorCategoria = (categoriaId) => {
  const catRef = collection(db, "items");
  const q = query(catRef, where("tipo", "==", categoriaId));
  return getDocs(q);
};




// getDoc(docsRef).then((snapshot)=>{
//   console.log(snapshot.data())
// })
