import React from 'react';
import SignInButton from '../signin-button/SignInButton';
import SignOutButton from '../signout-button/SignOutButton';

const Header = () => {
  return (
    <div className='w-screen h-20 dark:bg-zinc-900 bg-zinc-50 dark:text-zinc-300 text-zinc-700 shadow-2xl flex flex-row items-center p-10'>
      <p className='font-black text-2xl'>Muze</p>
      <div className='grow'></div>
      <SignInButton />
      <SignOutButton />
    </div>
  );
};

export default Header;
