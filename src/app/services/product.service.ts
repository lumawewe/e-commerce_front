import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private api: string = "http://localhost:3000/";

  constructor(private http:HttpClient) { }

  public getListProdutos():Observable<Array<Product>>{
    return this.http.get<Array<Product>>(`${this.api}produtos-cadastrados`);
  }
}
