import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

import { auth } from "../firebase";

// Registrar el usuario
export function register(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Login
export function Login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Logout
export function Logout() {
  return signOut(auth);
}

// Escuchar los cambios de la autentificacion
export function listenAuthChanges(callback) {
  return onAuthStateChanged(auth, callback);
}