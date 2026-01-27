import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export async function guardaProgresAnimal(uid, animalId) {

  const ref = doc(db, 'progress', uid)

  const snap = await getDoc(ref)

  let vistos = []

  if (snap.exists()) {
    vistos = snap.data().animals?.vistos || []
  }

  if(!vistos.includes(animalId)) {
    vistos.push(animalId)
  }

  await setDoc(ref, {
    animals: {
      vistos,
      updatedAt: serverTimestamp()
    }
  }, {merge: true})
}

export async function getProgressAnimal(uid) {
  const ref = doc(db, 'progress', uid)

  const snap = await getDoc(ref)

  if (!snap.exists()) return []

  return snap.data().animals?.vistos || []
}