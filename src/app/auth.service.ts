import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn : 'root'
})
export class AuthService {

  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || ('false'));

  setLoginStatus(value: any) {
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn', 'true');
  }

  get LoginStatus() {
    return JSON.parse(localStorage.getItem('loggedIn') || 
    this.loggedInStatus.toString());
  }

  sinUpUser(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  logInUser(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
}
