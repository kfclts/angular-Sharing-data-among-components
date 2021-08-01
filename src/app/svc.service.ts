import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SvcService {
  public mylistChild: String[] = [];
  public mylistParent: String[] = [];
  constructor() {}
}
