import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, EmailAuthProvider } from 'firebase/auth';
import * as firebaseui from 'firebaseui';
import MediaCard from './components/media-card/MediaCard';

export interface MediaItem {
  imageURL: string;
  imageAlt: string;
}

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

  const mediaItems: MediaItem[] = [
    {
      imageAlt: 'Cowboy Bebop The Movie',
      imageURL:
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/1886/18860058_so.jpg',
    },
    {
      imageAlt: 'Custom Robo (GCN)',
      imageURL:
        'https://www.mobygames.com/images/covers/l/449740-custom-robo-gamecube-front-cover.jpg',
    },
    {
      imageAlt: 'Radiata Stories (PS2)',
      imageURL:
        'https://www.mobygames.com/images/covers/l/55665-radiata-stories-playstation-2-front-cover.jpg',
    },
    {
      imageAlt: 'Oni (PS2)',
      imageURL:
        'https://www.mobygames.com/images/covers/l/6359-oni-playstation-2-front-cover.jpg',
    },
    {
      imageAlt: 'P.N.03 (GCN)',
      imageURL:
        'https://www.mobygames.com/images/covers/l/25530-p-n-03-gamecube-front-cover.jpg',
    },
    {
      imageAlt: 'Ghost in the Shell Arise: Border 1 (BluRay)',
      imageURL:
        'https://cover.box3.net/newsimg/dvdmov/max1463142755-frontback-cover.jpg',
    },
    {
      imageAlt: 'Nier Automata (PS4)',
      imageURL:
        'https://www.pcgamesarchive.com/wp-content/uploads/2020/12/NieR-Automata-Cover-1-scaled.jpg',
    },
    {
      imageAlt: 'Mushi-Shi',
      imageURL:
        'https://honeysanime.com/wp-content/uploads/2016/09/MushiShi-dvd-300x400.jpg',
    },
    {
      imageAlt: 'Fooly Cooly',
      imageURL:
        'https://www.previewsworld.com/SiteImage/MainImage/STK174337',
    },
    {
      imageAlt: 'Metroid Prime',
      imageURL:
        'https://www.mobygames.com/images/covers/l/242474-metroid-prime-gamecube-front-cover.jpg',
    },
    {
      imageAlt: 'Super Mario 64 (N64)',
      imageURL:
        'https://coverproject.sfo2.cdn.digitaloceanspaces.com/nintendo_64/label_n64_supermario64_thumb.jpg',
    },
  ];

  return (
    <div className='App min-h-screen flex flex-col'>
      <div className='self-start'>
        <Header />
      </div>
      <div className='flex flex-col grow bg-zinc-800'>
        <div className='flex flex-row flex-wrap p-5 gap-5 justify-center'>
          {mediaItems.map((item) => (
            <MediaCard
              size='md'
              imageAlt={item.imageAlt}
              imageURL={item.imageURL}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
