import { Component, OnInit } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit
{

  public addition: number = 0;
  public substraction: number = 0;

  constructor(private _obj:ArithmeticService)
  {

  }

  ngOnInit(): void
  {
    this.addition = this._obj.Add(10, 20);
    this.substraction = this._obj.Sub(30,20)
  }

}
