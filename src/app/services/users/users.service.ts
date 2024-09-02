import { Injectable } from '@angular/core';
import { Auth , createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut, User, signInWithPopup, GoogleAuthProvider} from '@angular/fire/auth';
export interface LogingInf{
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private auth: Auth) { }

  register({email , password}: LogingInf): Promise<any> {
 return createUserWithEmailAndPassword(this.auth, email, password);
}

  login({email , password}: LogingInf): Promise<any> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  loginWithGoogle(): Promise<any> {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout(): Promise<any> {
    return signOut(this.auth);
}

getCurrenUser(): User | null {
  return this.auth.currentUser;
}
}