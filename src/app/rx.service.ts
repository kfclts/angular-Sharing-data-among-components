import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RxService {
  public mylistChild: String[] = [];
  public mylistParent: String[] = [];

  public childMessage$ = of(this.mylistChild);
  public parentMessage$ = of(this.mylistParent);

  constructor() {}
}
