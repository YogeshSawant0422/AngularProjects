import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent
{
  @Output() public Myevent = new EventEmitter();

  public Message = "Hello Parent..";

  public SendMessage()
  {
    this.Myevent.emit(this.Message);
  }
}
