import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private auth: AngularFireAuth, private firebaseService: FirebaseService) { }

  /**
   * Observable that emits the currently logged in firebase.User. Is undefined if no one is logged in.
   */
  getCurrentUser$ = this.auth.authState;

  /**
   * Checks to see if the user is already logged in. If they aren't, it will create a new anonymous account.
   */
  logStudentIn() {
    return this.auth.auth.signInAnonymously().catch((error) => {
      console.error(error);
     });
  }
}