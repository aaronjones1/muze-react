import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Auth0Provider } from '@auth0/auth0-react';
import ProfileBlurb from './components/profile-blurb/ProfileBlurb';
import Header from './components/header/Header';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, EmailAuthProvider } from 'firebase/auth';
import * as firebaseui from 'firebaseui';

function onSignIn(authUI: firebaseui.auth.AuthUI) {
  authUI.start("#firebase-ui-auth-container", {
    signInOptions: [
      EmailAuthProvider.PROVIDER_ID
    ],
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
  if (!authUI){
    authUI = new firebaseui.auth.AuthUI(auth);
  }

  const analytics = getAnalytics(app);

  return (
    <Auth0Provider
      domain='dev-min73mnfgfs8ofzq.us.auth0.com'
      clientId='B6LUg8iZYrXiZyJTxHFnkHtOQZinSLLF'
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <div className='App min-h-screen flex flex-col'>
        <Header onSignInClick={onSignIn(authUI)!} />
        <section id="firebase-ui-auth-container"></section>
        <header className='flex flex-col grow items-center justify-center text-zinc-700 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800'>
          {/* <div className='flex flex-row gap-1'>
            <SignInButton />
            <SignOutButton />
          </div> */}
          <ProfileBlurb />
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
        </header>
      </div>
    </Auth0Provider>
  );
}

export default App;
