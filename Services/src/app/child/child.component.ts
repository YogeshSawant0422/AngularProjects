import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  template: `
  <h1>Hello From Child , I am Using Number and String Service</h1>
  <h2>Given {{Message}}</h2>
  <h2>Capital Count Is of "Marvellous INFOSYSTEMS" String is {{CapitalCount}}</h2>

  `
})
export class ChildComponent implements OnInit
{
  public Accept: any;
  public Message: any;
  public CapitalCount: any;

  constructor(private _obj: NumberService,private _obj2:StringService)
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

    this.CapitalCount = this._obj2.CountCapital("Marvellous INFOSYSTEMS");

  }

}
