import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
provideFirebaseApp(() => initializeApp({"projectId":"app-pokemon-2e208","appId":"1:359036584876:web:48aeace1db0720750b7009","storageBucket":"app-pokemon-2e208.appspot.com","apiKey":"AIzaSyBdSmhOSlBIiGoDsKN-HFLTuoF_r0GFod4","authDomain":"app-pokemon-2e208.firebaseapp.com","messagingSenderId":"359036584876","measurementId":"G-54HV8KST76"})), provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideFirestore(() => getFirestore()), provideStorage(() => getStorage()),
  ]
};
