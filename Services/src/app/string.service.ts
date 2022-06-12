import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService
{

  constructor()
  {

  }

  public CountCapital(collect:string)
  {
    return  (collect.match(/[A-Z]/g) || []).length;
  }

}

