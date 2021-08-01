import { Component, OnInit } from '@angular/core';
import { SvcService } from '../svc.service';

@Component({
  selector: 'app-svc-child',
  templateUrl: './svc-child.component.html',
})
export class SvcChildComponent implements OnInit {
  mylist: String[] = [];
  constructor(private svcService: SvcService) {}

  ngOnInit(): void {
    this.mylist = this.svcService.mylistChild;
  }

  addChildToParent() {
    this.svcService.mylistParent.push('child to parent');
  }
}
