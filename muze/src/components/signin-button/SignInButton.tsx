import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const SignInButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className='bg-pink-600 text-slate-50 font-bold px-4 py-2 rounded-full m-2'
      onClick={() => loginWithRedirect()}
    >
      Sign in
    </button>
  );
};

export default SignInButton;
