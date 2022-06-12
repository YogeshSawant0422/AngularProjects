import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent
{
  public Name = "Marvellous Infosystems";

  public fun()
  {
     this.Name.toUpperCase();
  }

  public gun()
  {
    this.Name.toLowerCase();
  }
}
