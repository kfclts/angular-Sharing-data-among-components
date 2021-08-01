import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SvcServiceService {
  public mylistChild: String[] = [];
  public mylistParent: String[] = [];
  constructor() {}
}
