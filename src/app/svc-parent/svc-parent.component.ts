import { Component, OnInit } from '@angular/core';
import { SvcServiceService } from '../svc-service.service';

@Component({
  selector: 'app-svc-parent',
  templateUrl: './svc-parent.component.html',
})
export class SvcParentComponent implements OnInit {
  mylist: String[] = [];
  constructor(private svcServiceService: SvcServiceService) {}

  ngOnInit(): void {
    this.mylist = this.svcServiceService.mylistParent;
  }

  addParentToChild() {
    this.svcServiceService.mylistChild.push('parent to child');
  }
}
