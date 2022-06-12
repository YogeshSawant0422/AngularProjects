import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService
{
  constructor()
  {

  }

  public Add(No1:number,No2:number)
  {
    return No1 + No2;
  }

  public Sub(value1:number,value2:number)
  {
    return value1 - value2;
  }
}
