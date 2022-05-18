// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDSfri8Pm-MYARQToQOxEKWDozyfneYiTs',
  authDomain: 'netflix-clone-71f28.firebaseapp.com',
  projectId: 'netflix-clone-71f28',
  storageBucket: 'netflix-clone-71f28.appspot.com',
  messagingSenderId: '1026622336940',
  appId: '1:1026622336940:web:ae721dce00ea4e96761409',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
