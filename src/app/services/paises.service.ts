import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paises } from '../models/paises';
import { Observable } from 'rxjs';
import { Bandeira } from '../models/bandeira';
import { Observacoes } from '../models/observacoes';
import { Level } from '../models/level';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  
  private api: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  public getListPaises(): Observable<Array<Paises>> {
    return this.http.get<Array<Paises>>(`${this.api}pais`);
  }

  public getListBandeira(): Observable<Array<Bandeira>> {
    return this.http.get<Array<Bandeira>>(`${this.api}bandeiras`);
  }

  public getListObs(): Observable<Array<Observacoes>> {
    return this.http.get<Array<Observacoes>>(`${this.api}observacoes`);
  }

  public getLevel(): Observable<Array<Level>>{
    return this.http.get<Array<Level>>(`${this.api}level`);
  }
}
