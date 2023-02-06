import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, EmailAuthProvider } from 'firebase/auth';
import * as firebaseui from 'firebaseui';

function onSignIn(authUI: firebaseui.auth.AuthUI) {
  authUI.start('#firebase-ui-auth-container', {
    signInOptions: [EmailAuthProvider.PROVIDER_ID],
  });
}

function App() {
  // Configure Firebase:
  const firebaseConfig = {
    apiKey: 'AIzaSyC6EgItqrwnsZW4IbD9kdL2kXRBysPBgcY',
    authDomain: 'muze-react.firebaseapp.com',
    projectId: 'muze-react',
    storageBucket: 'muze-react.appspot.com',
    messagingSenderId: '221861076290',
    appId: '1:221861076290:web:feef489068ea0bd15c3cdb',
    measurementId: 'G-NQTZP3TXVN',
  };

  // Initialize Firebase:
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  let authUI = firebaseui.auth.AuthUI.getInstance();
  if (!authUI) {
    authUI = new firebaseui.auth.AuthUI(auth);
  }

  const analytics = getAnalytics(app);

  return (
    <div className='App min-h-screen flex flex-col'>
      <div className='self-start'>
        <Header />
      </div>
      <div className='flex flex-col grow bg-zinc-800'>
        <div className='flex flex-row px-5 py-2'>
          <img
            className='w-40 h-fit m-5 rounded-3xl shadow-lg shadow-zinc-900 cursor-pointer'
            src='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/1886/18860058_so.jpg'
            alt='cowboy bebop the movie'
          />
          <img
            className='w-40 h-fit m-5 rounded-3xl shadow-lg shadow-zinc-900 cursor-pointer'
            src='https://www.mobygames.com/images/covers/l/449740-custom-robo-gamecube-front-cover.jpg'
            alt='custom robo'
          />
          <img
            className='w-40 h-fit m-5 rounded-3xl shadow-lg shadow-zinc-900 cursor-pointer'
            src='https://www.mobygames.com/images/covers/l/55665-radiata-stories-playstation-2-front-cover.jpg'
            alt='radiata stories'
          />
          <img
            className='w-40 h-fit m-5 rounded-3xl shadow-lg shadow-zinc-900 cursor-pointer'
            src='https://www.mobygames.com/images/covers/l/6359-oni-playstation-2-front-cover.jpg'
            alt='oni'
          />
          <img
            className='w-40 h-fit m-5 rounded-3xl shadow-lg shadow-zinc-900 cursor-pointer'
            src='https://www.mobygames.com/images/covers/l/25530-p-n-03-gamecube-front-cover.jpg'
            alt='product number 3'
          />
          <img
            className='m-5 h-56 rounded-3xl shadow-lg shadow-zinc-900 cursor-pointer'
            src='https://cover.box3.net/newsimg/dvdmov/max1463142755-frontback-cover.jpg'
            alt='ghost in the shell arise'
          />
          <img
            className='w-40 h-fit m-5 rounded-3xl shadow-lg shadow-zinc-900 cursor-pointer'
            src='https://www.pcgamesarchive.com/wp-content/uploads/2020/12/NieR-Automata-Cover-1-scaled.jpg'
            alt='nier automata'
          />
        </div>
      </div>
      {/* <header className='flex flex-col grow items-center justify-center text-zinc-700 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800'>
        <img src={logo} className='App-logo' alt='logo' />
        <p className='text-3xl font-black'>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
