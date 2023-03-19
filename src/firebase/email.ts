import firebase from "firebase/compat";
import { collection, getFirestore, addDoc, getDocs } from 'firebase/firestore'
import { app } from "./app";

export type CustomEmail = {
  to: string
  from: string
  subject: string
  text: string
}

export const write = async (data: CustomEmail) => {
  const db = getFirestore(app)
  const ref = collection(db, 'mail')

  try {
    await addDoc(ref, data)
    alert('성공')
  } catch (e) {
    console.error(e)
  }
}

export const read = async () => {
  const db = getFirestore(app)
  const ref = collection(db, 'mail')

  try {
    const { docs } = await getDocs(ref)

    return docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    }) as unknown as CustomEmail[]
  } catch (e) {
    console.error(e)
  }
}
