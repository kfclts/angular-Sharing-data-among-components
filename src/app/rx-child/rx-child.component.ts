import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { RxService } from '../rx.service';

@Component({
  selector: 'app-rx-child',
  templateUrl: './rx-child.component.html',
})
export class RxChildComponent implements OnInit {
  // message: String = '';
  childSubscription!: Subscription;
  parentSubscription!: Subscription;

  mylist: String[] = [];

  constructor(private rxService: RxService) {}

  ngOnInit(): void {
    // this.subscription = this.rxService.currentMessage.subscribe(
    //   (message) => (this.message = message)
    // );

    this.childSubscription = this.rxService.childMessage$.subscribe(
      (message) => (this.mylist = message)
    );
    this.parentSubscription = this.rxService.parentMessage$.subscribe();
  }

  ngOnDestroy() {
    this.childSubscription.unsubscribe();
    this.parentSubscription.unsubscribe();
  }

  // addChildToParent() {
  //   this.rxService.changeMessage('Hello from Sibling');
  // }

  addChildToParent() {
    this.rxService.mylistParent.push('child to parent');
  }
}
