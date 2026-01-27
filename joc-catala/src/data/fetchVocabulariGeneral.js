import vocabulariAnimals from "./vocabulariGeneral"
import { vocabulariMenjars, preguntesVideojocs } from "./vocabulariGeneral";

export function fetchVocabulariAnimals(){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(vocabulariAnimals);
    }, 1000);
  })
}

export function fetchVocabulariMenjars(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(vocabulariMenjars);
    }, 1000);
  })
}

export function fetchPreguntesVideojocs(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(preguntesVideojocs);
    }, 1000);
  })
}