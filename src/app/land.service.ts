import { Injectable } from '@angular/core';
import { LANDEN } from './mock-landen';
import { Land } from './model/land';

@Injectable({
  providedIn: 'root'
})
export class LandService {
  getLanden():Promise<Land[]>{
    return Promise.resolve(LANDEN);
  }
}
