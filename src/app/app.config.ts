import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';



export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"prueba-firebase-c5d35","appId":"1:606071675856:web:4966a6c5aec52cc4d437d5","storageBucket":"prueba-firebase-c5d35.firebasestorage.app","apiKey":"AIzaSyAURPvi4S94fFLkwSusEoqh-63GIqZYYWI","authDomain":"prueba-firebase-c5d35.firebaseapp.com","messagingSenderId":"606071675856","measurementId":"G-LL4ZV8KF2T"})), provideFirestore(() => getFirestore())]
};
