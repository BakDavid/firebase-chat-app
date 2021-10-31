import React from 'react';
import './App.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyBgur3yxdtIne5ekjNPppRO-_lvcKEPFOk",
  authDomain: "fir-chat-app-466b2.firebaseapp.com",
  projectId: "fir-chat-app-466b2",
  storageBucket: "fir-chat-app-466b2.appspot.com",
  messagingSenderId: "201456430988",
  appId: "1:201456430988:web:57495f4947c65b306bb0a9",
  measurementId: "G-JGJS78MQYR"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
