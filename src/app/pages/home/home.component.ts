import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public inMapa: boolean  = false;
  public inMessage: boolean  = false;
  public inAcesso: boolean  = true;
  public inProductList: boolean = false;
  public inProductDetail: boolean = false;
 
  public inHistorySaldo: boolean = false;
  public inSaldo : boolean =  false;
}
