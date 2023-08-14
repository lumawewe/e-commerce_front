import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-commerce';
  public inAcesso: boolean  = true;

  public inMapa: boolean  = false;
  public inMessage: boolean  = false;
  public inProductList: boolean = false;
  public inProductDetail: boolean = false;
 
  public inHistorySaldo: boolean = false;
  public inSaldo : boolean =  false;
}
