import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  template: `<h2>Hello From Child2, We us String service</h2>
  <h3>Capital Count is {{CapitalCount}}</h3>
  `
})
export class Child2Component implements OnInit
{
  public CapitalCount: any;

  constructor(private _obj:StringService)
  {

  }

  ngOnInit(): void
  {
    this.CapitalCount = this._obj.CountCapital("MarVellous");
  }

}
