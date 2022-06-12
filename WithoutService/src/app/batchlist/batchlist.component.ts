import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batchlist',
  template: `<h2>Inside Batch List</h2>
  <ul *ngFor="let value of Batches">
   <li>{{value.Name}}</li>
  </ul>
  `
})
export class BatchlistComponent implements OnInit
{

  public Batches = [
    { "Name": "PPA", "Duration": 4, "Fees": 16500 },
    { "Name": "LB", "Duration": 3, "Fees": 17000 },
    { "Name": "PYTHON", "Duration": 5, "Fees": 15000 },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
