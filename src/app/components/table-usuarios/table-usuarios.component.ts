import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FiltroUsuario } from 'src/app/models/filtroUsuario.model';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-table-usuarios',
  templateUrl: './table-usuarios.component.html',
  styleUrls: ['./table-usuarios.component.scss']
})
export class TableUsuariosComponent implements OnInit {

  public listUser!: Usuario[];
  public filtroUsuario: any = {};
  public data: string = '';

  constructor(private usuarioService: UsuarioService, private formBuilder: FormBuilder) {

  }

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

  onSubmit(filtro: FiltroUsuario) {

    console.log("Pesquisar por: " + filtro.dtFim);
    console.log("Pesquisar por: " + filtro.dtInicio);
    console.log("Pesquisar por: " + filtro.saldo);
    console.log("Pesquisar por: " + filtro.nome);
    //this.limparFormulario();


  }





}
