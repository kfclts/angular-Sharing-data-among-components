import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { RxService } from '../rx.service';

@Component({
  selector: 'app-rx-parent',
  templateUrl: './rx-parent.component.html',
})
export class RxParentComponent implements OnInit {
  mylist: String[] = [];

  // message: String = '';
  childSubscription!: Subscription;
  parentSubscription!: Subscription;

  constructor(private rxService: RxService) {}

  ngOnInit(): void {
    // this.subscription = this.rxService.currentMessage.subscribe(
    //   (message) => (this.message = message)
    // );

    this.childSubscription = this.rxService.childMessage$.subscribe();
    this.parentSubscription = this.rxService.parentMessage$.subscribe(
      (message) => (this.mylist = message)
    );
  }

  ngOnDestroy() {
    this.childSubscription.unsubscribe();
    this.parentSubscription.unsubscribe();
  }

  addParentToChild() {
    this.rxService.mylistChild.push('parent to child');
  }
}
