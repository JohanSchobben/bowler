import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PinService {
  private pinSubject: Subject<number> = new Subject<number>();

  get pin$(): Observable<number> {
    return this.pinSubject.asObservable();
  }

  insertPin(amount: number): void {
    this.pinSubject.next(amount);
  }
}
