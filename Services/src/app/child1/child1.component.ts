import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  template: `

  <h2>Hello From Child 1 , We use number service</h2>
  <h3>Given Inputed is : {{Message}}</h3>
  `
})
export class Child1Component implements OnInit
{

  public Accept: any;
  public Message: any;

  constructor(private _obj:NumberService)
  {

  }

  ngOnInit(): void
  {
    this.Accept = this._obj.ChkPrime(13);

    if (this.Accept == 0)
    {
      this.Message = "Number Is Prime";
    }
    else
    {
      this.Message = "Number Not Prime";
    }
  }

}
