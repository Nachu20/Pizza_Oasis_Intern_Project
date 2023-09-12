import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private userDataSubject = new Subject<any>();

  sendUserData(email: string) {
    this.userDataSubject.next(email);
  }

  getUserData(): Observable<any> {
    return this.userDataSubject.asObservable();
  }
}
