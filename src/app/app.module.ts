import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { HomeComponent } from './home/home.component';
import { LoaderComponent } from './loader/loader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import firebase from 'firebase/compat/app';

const config = {
  apiKey: "AIzaSyB1z0GnedFhHVrImUMLjofQJH_KYAmw014",
  authDomain: "agilizapp-d8335.firebaseapp.com",
  projectId: "agilizapp-d8335",
  storageBucket: "agilizapp-d8335.appspot.com",
  messagingSenderId: "315833251536",
  appId: "1:315833251536:web:a4f71fd0f0aa0e02df10d5",
  measurementId: "G-HZH8LKCRTR"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoaderComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
