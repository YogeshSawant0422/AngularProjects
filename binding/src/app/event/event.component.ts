import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent
{
  public str = "";

  public EventHandler()
  {
    console.log("Inside Event Handler");
  }

  public Gun()
  {
    this.str = "Button Clicked";
  }

  public Sun(Data:any)
  {
    console.log(Data);
  }
}
