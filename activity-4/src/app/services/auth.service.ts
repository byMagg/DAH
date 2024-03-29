import { Injectable } from '@angular/core';
import { DbService } from './db.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  userData: any;
  logged: boolean = false

  constructor(
    public afs: AngularFirestore,
    private dbService: DbService,
    public afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user') || '{}');
      } else {
        localStorage.setItem('user', '{}');
        JSON.parse(localStorage.getItem('user') || '{}');
      }
    });
  }

  doLogin(value: { email: string; password: string; }) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => {
            this.logged = true
            resolve(res)
          },
          err => reject(err))
    })
  }

  doLogout() {
    return new Promise<void>((resolve, reject) => {
      this.afAuth.signOut()
        .then(() => {
          localStorage.removeItem('user');
          if (this.userData) this.dbService.unsubscribeOnLogOut();
          this.logged = false
          resolve();
        }).catch((error) => {
          console.log(error);
          reject();
        });
    })
  }
}
