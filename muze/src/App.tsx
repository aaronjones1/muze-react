import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Auth0Provider } from '@auth0/auth0-react';
import ProfileBlurb from './components/profile-blurb/ProfileBlurb';
import Header from './components/header/Header';

function App() {
  return (
    <Auth0Provider
      domain='dev-min73mnfgfs8ofzq.us.auth0.com'
      clientId='B6LUg8iZYrXiZyJTxHFnkHtOQZinSLLF'
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <div className='App min-h-screen flex flex-col'>
        <Header />
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

