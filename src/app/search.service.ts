import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  users$: ReplaySubject<User[]> = new ReplaySubject<User[]>();

  constructor () {
    setInterval(() => {
      this.search();
    }, 3000);
  }

  search (): Observable<User[]> {
    this.users$.next([
      {
        id: Date.now(),
        name: 'Diego',
      }
    ]);

    return this.users$;
  }
}
