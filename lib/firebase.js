// Firebase configuration and initialization
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWyxLX_IwwdrKkysaqG0kn1-AfmQDICBE",
  authDomain: "wishcointech.firebaseapp.com",
  projectId: "wishcointech",
  storageBucket: "wishcointech.firebasestorage.app",
  messagingSenderId: "927740141086",
  appId: "1:927740141086:web:72cad2c1c0313cac59180f",
  measurementId: "G-V6DDTJT3J8"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firestore
export const db = getFirestore(app)

// Initialize Analytics (only in browser)
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null

export default app