import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app=firebase.initializeApp({
    apiKey:"AIzaSyDnIta9b4640l7m8FttT3FkeSKA7fOhjfE",
    authDomain:"auth-dev-8bee4.firebaseapp.com",
    projectId:"auth-dev-8bee4",
    storageBucket:"auth-dev-8bee4.appspot.com",
    messagingSenderId:"542703284499",
    appId: "1:542703284499:web:172cbaa6d963bb496a2ae6"
})
console.log(process.env)

export const auth=app.auth()
export default app