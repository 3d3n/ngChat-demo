import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Registration } from '../models/registration-model';

const initialRegistration: Registration = { screenName: '' };

@Injectable()
export class RegisterService {
  readonly KEY = 'currentchatter';
  private user: BehaviorSubject<Registration>;
  private readonly user$: Observable<Registration>;

  constructor() {
    const storedRegistrations =
      localStorage.getItem(this.KEY) !== null
        ? JSON.parse(localStorage.getItem(this.KEY) || '')
        : initialRegistration;

    this.user = new BehaviorSubject<Registration>(storedRegistrations);
    this.user$ = this.user.asObservable();
  }

  registerChatter(chatter: Registration): void {
    this.user.next(chatter);
    localStorage.setItem(this.KEY, JSON.stringify(chatter));
  }

  getRegistration(): Observable<Registration> {
    return this.user$;
  }
}
