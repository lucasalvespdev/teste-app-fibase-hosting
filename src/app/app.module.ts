import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const config = {
  apiKey: "AIzaSyB1z0GnedFhHVrImUMLjofQJH_KYAmw014",
  authDomain: "agilizapp-d8335.firebaseapp.com",
  projectId: "agilizapp-d8335",
  storageBucket: "agilizapp-d8335.appspot.com",
  messagingSenderId: "315833251536",
  appId: "1:315833251536:web:a4f71fd0f0aa0e02df10d5",
  measurementId: "G-HZH8LKCRTR"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
