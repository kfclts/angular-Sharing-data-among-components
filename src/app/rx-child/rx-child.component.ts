import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { RxService } from '../rx.service';

@Component({
  selector: 'app-rx-child',
  templateUrl: './rx-child.component.html',
})
export class RxChildComponent implements OnInit {
  message: string = '';
  subscription!: Subscription;

  constructor(private rxService: RxService) {}

  ngOnInit(): void {
    this.subscription = this.rxService.currentMessage.subscribe(
      (message) => (this.message = message)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  newMessage() {
    this.rxService.changeMessage('Hello from Sibling');
  }
}
