import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-commerce';
  public inAcesso: boolean = true;

  public inMapa: boolean = true;
  public inMessage: boolean = true;
  public inProductList: boolean = true;
  public inProductDetail: boolean = true;

  public inHistorySaldo: boolean = true;
  public inSaldo: boolean = true;


  porEnquantoLogar(acesso: boolean) {
    if (acesso == true) {
      this.inAcesso = acesso;
    } else {
      this.inAcesso = false;
    }
  }
}
