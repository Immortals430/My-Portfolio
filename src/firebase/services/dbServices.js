import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

export const fetchCollection = async (collectionName) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  return querySnapshot.docs.map((doc) => doc.data());
};

export const saveMessage = async (messageData) => {
  const docRef = await addDoc(collection(db, "Messages"), messageData);
  return docRef;
};
