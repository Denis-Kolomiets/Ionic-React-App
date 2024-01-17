import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDohbg7CLImx2lQt7S-C0adNMu_DvMZvYg',
  authDomain: 'daily-moments-application.firebaseapp.com',
  projectId: 'daily-moments-application',
  storageBucket: 'daily-moments-application.appspot.com',
  messagingSenderId: '640842711635',
  appId: '1:640842711635:web:3124550d1b2a4946b0fca6',
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
