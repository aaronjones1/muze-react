import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const SignOutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      className='bg-slate-50 text-slate-900 font-bold px-4 py-2 rounded-full m-2'
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Sign out
    </button>
  );
};

export default SignOutButton;
