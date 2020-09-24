import { firestoreDB } from "../base";

export const createShift = (data, thenFn, catchFn) => {
    firestoreDB.collection("shifts").add(data).then(thenFn).catch(catchFn);
}

export const getShifts = (thenFn, catchFn) => {
    firestoreDB.collection("shifts").get().then(thenFn).catch(catchFn);
}

export const getShift = (id, thenFn, catchFn) => {
    firestoreDB.collection("shifts").doc(id).get().then(thenFn).catch(catchFn);
}

export const editShift = (id, data, thenFn, catchFn) => {
    firestoreDB.collection("shifts").doc(id).set(data, { merge: true }).then(thenFn).catch(catchFn);
}

export const deleteShift = (id, thenFn, catchFn) => {
    firestoreDB.collection("shifts").doc(id).delete().then(thenFn).catch(catchFn);
}