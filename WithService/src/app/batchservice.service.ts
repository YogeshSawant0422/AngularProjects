import { Injectable } from '@angular/core';
import { IBatches } from './Batches';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BatchserviceService
{
  private URL = './assets/Data/Batches.json'


  constructor(private _obj: HttpClient)
  {

  }

  public GetBatches() : Observable<IBatches[]>
  {
    return this._obj.get<IBatches[]>(this.URL);
  }

}
