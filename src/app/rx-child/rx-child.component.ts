import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { RxServiceService } from '../rx-service.service';

@Component({
  selector: 'app-rx-child',
  templateUrl: './rx-child.component.html',
})
export class RxChildComponent implements OnInit {
  message: string = '';
  subscription!: Subscription;

  constructor(private rxServiceService: RxServiceService) {}

  ngOnInit(): void {
    this.subscription = this.rxServiceService.currentMessage.subscribe(
      (message) => (this.message = message)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  newMessage() {
    this.rxServiceService.changeMessage('Hello from Sibling');
  }
}
