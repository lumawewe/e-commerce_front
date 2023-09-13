import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { RelatoriosComponent } from './components/relatorios/relatorios.component';
import { ProductsForSaleComponent } from './components/products-for-sale/products-for-sale.component';
import { TermosComponent } from './components/termos/termos.component';
import { CadastrarProdutoComponent } from './components/cadastrar-produto/cadastrar-produto.component';
import { FinalizarCompraComponent } from './components/nav-bar/finalizar-compra/finalizar-compra.component';
import { ContaComponent } from './pages/conta/conta.component';
import { CarteiraComponent } from './pages/carteira/carteira.component';
import { TableUsuariosComponent } from './components/table-usuarios/table-usuarios.component';
import { PagamentoComponent } from './components/pagamento/pagamento.component';
import { HistoricoComprasComponent } from './components/historico-compras/historico-compras.component';
import { Erro404Component } from './pages/erro404/erro404.component';

//Guards
import { auteticacaoRotasGuard } from './guards/auteticacao-rotas.guard';
import { auteticacaoAdminGuard } from './guards/auteticacao-admin.guard';
import { loginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent ,
    canDeactivate:[loginGuard]
  },
  { path: 'register', component: RegisterComponent },
  { path: 'relatorios', component: RelatoriosComponent },
  { path: 'buy', component: ProductsForSaleComponent },
  { path: 'termos', component: TermosComponent },
  {
    path: 'cadastrar-produto', component: CadastrarProdutoComponent,
    canActivate: [auteticacaoAdminGuard]
  },
  {
    path: 'finalizar-compra',
    component: FinalizarCompraComponent,
    canActivate: [auteticacaoRotasGuard]
  },
  { path: 'conta', component: ContaComponent },
  {
    path: 'userRegister', component: TableUsuariosComponent,
    canActivate: [auteticacaoAdminGuard]
  },
  { path: 'history', component: HistoricoComprasComponent },
  { path: '404', component: Erro404Component },
  {
    path: 'carteira', component: CarteiraComponent, children: [
      { path: 'pagamento', component: PagamentoComponent },
    ]
  },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
