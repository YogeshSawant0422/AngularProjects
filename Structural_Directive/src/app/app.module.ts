import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgForDemoComponent } from './ng-for-demo/ng-for-demo.component';
import { NgifDemoComponent } from './ngif-demo/ngif-demo.component';
import { NgSwitchDemoComponent } from './ng-switch-demo/ng-switch-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    NgForDemoComponent,
    NgifDemoComponent,
    NgSwitchDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
