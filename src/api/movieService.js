import { firestoreDB } from "../base";

export const createMovie = (data, thenFn, catchFn) => {
    firestoreDB.collection("movies").add(data).then(thenFn).catch(catchFn);
}

export const getMovies = (thenFn, catchFn) => {
    firestoreDB.collection("movies").get().then(thenFn).catch(catchFn);
}

export const getMovie = (id, thenFn, catchFn) => {
    firestoreDB.collection("movies").doc(id).get().then(thenFn).catch(catchFn);
}

export const editMovie = (id, data, thenFn, catchFn) => {
    firestoreDB.collection("movies").doc(id).set(data, { merge: true }).then(thenFn).catch(catchFn);
}