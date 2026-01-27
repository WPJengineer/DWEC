import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'

export async function createUser(uid, email) {
  const userRef = doc(db, 'users', uid)

  await setDoc(userRef, {
    email,
    role: 'alumnat',
    createdAt: serverTimestamp()
  })
}

export async function getUser(uid) {
  const userRef = doc(db, 'users', uid)
  const snapshot = await getDoc(userRef)

  if (!snapshot.exists()) {
    return null
  }

  return snapshot.data()
}