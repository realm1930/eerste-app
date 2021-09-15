import { Injectable } from '@angular/core';
import { LANDEN } from './mock-landen';
import { Land } from './model/land';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandService {
  getLanden():Observable<Land[]>{
    return of(LANDEN);
  }
  getTopLanden(top: number): Observable<Land[]> {
    return of(LANDEN.sort((a, b) => b.inwoners - a.inwoners).slice(0, top));
    }
}

