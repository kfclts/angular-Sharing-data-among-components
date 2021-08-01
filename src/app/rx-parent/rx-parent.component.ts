import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { RxService } from '../rx.service';

@Component({
  selector: 'app-rx-parent',
  templateUrl: './rx-parent.component.html',
})
export class RxParentComponent implements OnInit {
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
}
