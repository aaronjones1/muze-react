import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Auth0Provider } from '@auth0/auth0-react';
import SignInButton from './components/signin-button/SignInButton';
import SignOutButton from './components/signout-button/SignOutButton';
import ProfileBlurb from './components/profile-blurb/ProfileBlurb';

function App() {
  return (
    <Auth0Provider
      domain='dev-min73mnfgfs8ofzq.us.auth0.com'
      clientId='B6LUg8iZYrXiZyJTxHFnkHtOQZinSLLF'
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <div className='App'>
        <header className='flex flex-col min-h-screen items-center justify-center text-slate-100 bg-slate-900'>
          <div className='flex flex-row gap-1'>
            <SignInButton />
            <SignOutButton />
          </div>
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

