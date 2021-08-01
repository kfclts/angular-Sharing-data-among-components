import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { RxServiceService } from '../rx-service.service';

@Component({
  selector: 'app-rx-parent',
  templateUrl: './rx-parent.component.html',
})
export class RxParentComponent implements OnInit {
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
}
