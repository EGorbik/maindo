import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.apiKey,
    projectId: process.env.projectId,
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
