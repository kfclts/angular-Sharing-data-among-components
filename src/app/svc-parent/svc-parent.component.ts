import { Component, OnInit } from '@angular/core';
import { SvcService } from '../svc.service';

@Component({
  selector: 'app-svc-parent',
  templateUrl: './svc-parent.component.html',
})
export class SvcParentComponent implements OnInit {
  mylist: String[] = [];
  constructor(private svcService: SvcService) {}

  ngOnInit(): void {
    this.mylist = this.svcService.mylistParent;
  }

  addParentToChild() {
    this.svcService.mylistChild.push('parent to child');
  }
}
