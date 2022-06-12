import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'Marvellous';

  public Name = "Marvellous Infosystems";

 /* public fun()
  {
    return this.Name;
  }*/

  public gun()
  {
    this.Name = "Educating for Better tomorrow";
  }
}
