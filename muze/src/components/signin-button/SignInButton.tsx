import React from 'react';

export interface SignInButtonProps {
  onClick?: () => void;
}

const SignInButton = (props: SignInButtonProps) => {
  return (
    <button
      className='bg-indigo-900 hover:bg-indigo-800 text-slate-50 font-bold px-4 py-2 rounded-full m-2'
      onClick={props.onClick}
    >
      Sign in
    </button>
  );
};

export default SignInButton;
