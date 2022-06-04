import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { MarvellousComponent } from './marvellous/marvellous.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    MarvellousComponent,
    ClassBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
