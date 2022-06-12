import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.css']
})
export class NewCompComponent
{
  public Name = "Marvellous";

  public x = this.Name.toUpperCase();

  public y = this.Name.toLowerCase();

  public NewString = this.Name + " Infosystems";


}
