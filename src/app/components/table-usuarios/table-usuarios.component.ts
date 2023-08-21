import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-table-usuarios',
  templateUrl: './table-usuarios.component.html',
  styleUrls: ['./table-usuarios.component.scss']
})
export class TableUsuariosComponent implements OnInit {

 public listUser!: Usuario[];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.carregaTableUsuario();
  }

  public carregaTableUsuario() {
    this.usuarioService.getUsuarioAll().subscribe({
      next: (data) => this.listUser = data,
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  }

}
