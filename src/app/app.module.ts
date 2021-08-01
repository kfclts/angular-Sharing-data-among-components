import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RxParentComponent } from './rx-parent/rx-parent.component';
import { RxChildComponent } from './rx-child/rx-child.component';
import { SvcParentComponent } from './svc-parent/svc-parent.component';
import { SvcChildComponent } from './svc-child/svc-child.component';

@NgModule({
  declarations: [
    AppComponent,
    RxParentComponent,
    RxChildComponent,
    SvcParentComponent,
    SvcChildComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
