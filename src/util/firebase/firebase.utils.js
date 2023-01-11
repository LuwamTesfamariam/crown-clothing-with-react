import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC7Gv3AyS0ApLh08M6zSmIebI8_Y9nHOEI",
    authDomain: "crown-clothing-db-4286d.firebaseapp.com",
    projectId: "crown-clothing-db-4286d",
    storageBucket: "crown-clothing-db-4286d.appspot.com",
    messagingSenderId: "1035979517490",
    appId: "1:1035979517490:web:dc6c783bec8147e227162b"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date;
        try {
            await setDoc(userDocRef, { displayName, email, createdAt });
        }
        catch(error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;


};

