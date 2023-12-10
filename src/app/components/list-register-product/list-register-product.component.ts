import { Component } from '@angular/core';

@Component({
  selector: 'app-list-register-product',
  templateUrl: './list-register-product.component.html',
  styleUrls: ['./list-register-product.component.scss']
})
export class ListRegisterProductComponent {


  validacaoDeletarProduto : boolean = false; 

  public validaExclusao ():void{
    const retornoValidacao = false;
    //vai no service verificar se esse produto nao esta vinculado a nenhum usuario
    if(retornoValidacao){
      this.validacaoDeletarProduto = true;
    }else{
      this.validacaoDeletarProduto = false;
    }
  }

}
