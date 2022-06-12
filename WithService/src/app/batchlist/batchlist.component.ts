import { Component, OnInit } from '@angular/core';
import { BatchserviceService } from '../batchservice.service';

@Component({
  selector: 'app-batchlist',
  template: `
  <h2>Inside Batch List</h2>

  <ul *ngFor="let value of Batches">
    <li>{{value.Name}}</li>
</ul>

  `
})
export class BatchlistComponent implements OnInit
{
  public Batches: any = [];

  constructor(private _obj:BatchserviceService)
  {

  }

  ngOnInit(): void
  {
    this.Batches = this._obj.GetBatches().subscribe(data => this.Batches = data);
  }

}
