import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const ProfileBlurb = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading your profile information...</div>;
  }

  if (isAuthenticated && user) {
    return (
      <div className='flex flex-row items-center gap-4'>
        <img className='rounded-full h-10 w-10' src={user.picture} alt={user.name} />
        <div className='flex flex-col items-start'>
          <p className='font-medium'>{user.name}</p>
          <p>{user.email}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>Please sign in to view your profile.</p>
      </div>
    );
  }
};

export default ProfileBlurb;
