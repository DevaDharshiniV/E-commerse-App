import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedInGuard: boolean = false;

  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(public fireauth: AngularFireAuth, private router: Router) {
    this.fireauth.authState.subscribe((user) => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        this.loggedIn.next(true);
      } else {
        localStorage.removeItem('user');
        this.loggedIn.next(false);
      }
    });
  }

  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password)
      .then((res) => {
        localStorage.setItem('token', 'true');
        this.isLoggedInGuard = true;

        if(res.user?.emailVerified==true){
          this.router.navigate(['/']);

        }
        else{
          this.router.navigate(['/verify-email']);
        }
      })
      .catch((error) => {
        alert(error.message);
        this.router.navigate(['/login']);
      });
  }
  

  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password)
      .then((ref) => {
        alert('Registration Successful');
        this.router.navigate(['/login']);
        this.sendEmailForVerification(ref.user);
      })
      .catch((error) => {
        alert(error.message);
        this.router.navigate(['/register']);

      });
  }

  loadUser() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.loggedIn.next(true);
    } else {
      this.loggedIn.next(false);
    }
  }

  logOut() {
    this.fireauth.signOut()
      .then(() => {
        localStorage.removeItem('token');
        this.isLoggedInGuard = false;
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  forgotPassword(email: string){
    this.fireauth.sendPasswordResetEmail(email).then(() => {
      this.router.navigate(['/verify-email']);
    },err =>{
      alert('Something went wrong');
    })
  }

  sendEmailForVerification(user: any){
    user.sendEmailVerification().then((res: any) => {
      this.router.navigate(['/verify-email']);
    },(err:any) => {
      alert("Something went wrong. Not able to send mail to your email.")
    })

  }
}
