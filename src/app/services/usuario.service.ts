import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private URL: string = "http://localhost:8080/conta";

  constructor(private httpClient: HttpClient) { }

  //GET ALL
  public getUsuarioAll(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(`${this.URL}`);
  }

  //GET BY ID
  public getUsuarioId(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.URL}/${id}`);
  }

  // Create
  public createUsuario(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.URL, usuario);
  }

}