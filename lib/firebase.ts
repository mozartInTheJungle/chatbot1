import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4LcmJHJK7fprqYWgACNuXGFaSTG4Uyiw",
  authDomain: "ai-chatbot-app-f0c14.firebaseapp.com",
  projectId: "ai-chatbot-app-f0c14",
  storageBucket: "ai-chatbot-app-f0c14.firebasestorage.app",
  messagingSenderId: "886517383663",
  appId: "1:886517383663:web:f46458ec23202a237db61a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app; 