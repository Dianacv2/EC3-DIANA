import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { provideAuth } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { from } from 'rxjs';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideFirebaseApp(() => 
      initializeApp({
          apiKey: "AIzaSyC5_mDfqwKY_VktUw1GJbmfBs9jbS2EYYA",
          authDomain: "da-ii-ec3-26bc4.firebaseapp.com",
          projectId: "da-ii-ec3-26bc4",
          storageBucket: "da-ii-ec3-26bc4.firebasestorage.app",
          messagingSenderId: "1040391443291",
          appId: "1:1040391443291:web:270fa7867bc6db06da407e"
      })
    ),
  provideAuth(() => getAuth()),
  provideFirestore(() => getFirestore()),
  ]
};


//oscacito009@gmail.com
//Admin123$