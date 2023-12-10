import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProdutosCc } from 'src/app/models/produtos-cc';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-for-sale',
  templateUrl: './products-for-sale.component.html',
  styleUrls: ['./products-for-sale.component.scss']
})
export class ProductsForSaleComponent implements OnInit {

  public listaProdutos: Array<Product> = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.buscaListaProduto();
  }

  public buscaListaProduto() {
    return this.productService.getListProdutos()
      .subscribe(products => {
        this.listaProdutos = products;
      });
  }
}
