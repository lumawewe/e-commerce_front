import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Bandeira } from 'src/app/models/bandeira';
import { Level } from 'src/app/models/level';
import { Observacoes } from 'src/app/models/observacoes';
import { Paises } from 'src/app/models/paises';
import { Product } from 'src/app/models/product.model';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.scss'],
})
export class CadastrarProdutoComponent implements OnInit {

  public listCountry: Array<Paises> = [];
  public listaBandeira: Array<Bandeira> = [];
  public listaObservacoes: Array<Observacoes> = [];
  public listaLevel: Array<Level> = [];
  productForm!: FormGroup;

  constructor(private paisesService: PaisesService, private formBuilder: FormBuilder) {
    this.createForm(new Product());
  }

  ngOnInit() {
    this.carregarFormulario();
  }

  createForm(product: Product) {
    this.productForm = new FormGroup({
      bin: new FormControl('', [Validators.required]),
      cc: new FormControl('', [Validators.required]),
      pais: new FormControl('', [Validators.required]),
      bandeira: new FormControl('', [Validators.required]),
      tipo: new FormControl('', [Validators.required]),
      level: new FormControl('', [Validators.required]),
      banco: new FormControl('', [Validators.required]),
      preco: new FormControl('', [Validators.required]),
      observa: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    console.warn(this.productForm.value);
  }

  carregarFormulario() {
    this.buscarPaises();
    this.buscarBandeira();
    this.buscarObservacoes();
    this.buscarLevel();
  }

  public buscarBandeira() {
    return this.paisesService.getListBandeira()
      .subscribe(ban => {
        this.listaBandeira = ban;
      })

  }

  public buscarPaises() {
    return this.paisesService.getListPaises()
      .subscribe(paises => {
        this.listCountry = paises;
      });
  }
  public buscarObservacoes() {
    return this.paisesService.getListObs()
      .subscribe(obsss => {
        this.listaObservacoes = obsss;
      });
  }

  public buscarLevel() {
    return this.paisesService.getLevel()
      .subscribe(levell => {
        this.listaLevel = levell;
      })
  }

  limparForm(): void {

  }

}