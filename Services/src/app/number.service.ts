import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService
{

  constructor()
  {

  }

  public ChkPrime(num:number)
  {
    var i: number = 2;

    while (i <= num)
    {
      if (num % i == 0)
      {
        break;
      }
      i++;
    }

    if (i == num)
    {
      return 0;
    }
    else
    {
      return 1;
    }

  }

  public CountCapital()
  {

  }
}
