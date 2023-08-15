import { Component } from '@angular/core';
import { Country } from 'src/app/models/country .model';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.scss']
})
export class CadastrarProdutoComponent {

  public listCountry: Array<Country> = [
    {
      "name": "Brasil",
      "capital": "Brasília",
      "population": 212559417,
      "area": 8515767
    },
    {
      "name": "Estados Unidos",
      "capital": "Washington, D.C.",
      "population": 331002651,
      "area": 9372610
    },
    {
      "name": "Canadá",
      "capital": "Ottawa",
      "population": 37742154,
      "area": 9984670
    }

  ]


}
