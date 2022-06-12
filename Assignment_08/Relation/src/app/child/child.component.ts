import { Component, OnInit,EventEmitter,Output, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent
{
  @Output() public NewEvent = new EventEmitter();
  @Input() public Data:any;

  public Receive(UserData:any)
  {
    this.NewEvent.emit(UserData);
  }
}
