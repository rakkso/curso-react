import { FirebaseAuth } from "./config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() =>{
    try {
        googleProvider.setCustomParameters({
            prompt: 'select_account'
        });
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const {displayName,email,photoURL,uid} = result.user;
//        const credentials = GooggleAuthProvider.credentialFromResult(result);
        //console.log ( {credentials})


        return {
            ok: true,
            //User info
            displayName, email, photoURL,uid
        }
    } catch (error) {
        console.log(error);

        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: fale,
            errorMessage
        }
    }
}



export const registerUserWithEmailPassword = async ({email,password,displayName}) =>{

    try {
        const resp  = await createUserWithEmailAndPassword (FirebaseAuth,email,password)
        const {uid, photoURL } = resp.user;
        console.log(resp);

        await updateProfile( FirebaseAuth.currentUser,{displayName});

       

        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch (error) {
        console.log(error);
        return { ok: false, errorMessage: error.message}
    }
}