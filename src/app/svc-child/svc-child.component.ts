import { Component, OnInit } from '@angular/core';
import { SvcServiceService } from '../svc-service.service';

@Component({
  selector: 'app-svc-child',
  templateUrl: './svc-child.component.html',
})
export class SvcChildComponent implements OnInit {
  mylist: String[] = [];
  constructor(private svcServiceService: SvcServiceService) {}

  ngOnInit(): void {
    this.mylist = this.svcServiceService.mylistChild;
  }

  addChildToParent() {
    this.svcServiceService.mylistParent.push('child to parent');
  }
}
