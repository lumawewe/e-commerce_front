import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { RelatoriosComponent } from './components/relatorios/relatorios.component';
import { ProductsForSaleComponent } from './components/products-for-sale/products-for-sale.component';
import { TermosComponent } from './components/termos/termos.component';
import { CadastrarProdutoComponent } from './components/cadastrar-produto/cadastrar-produto.component';
import { FinalizarCompraComponent } from './components/nav-bar/finalizar-compra/finalizar-compra.component';
import { ContaComponent } from './pages/conta/conta.component';
import { CarteiraComponent } from './pages/carteira/carteira.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'relatorios', component: RelatoriosComponent },
  { path: 'buy' , component: ProductsForSaleComponent},
  { path: 'termos' , component: TermosComponent},
  { path: 'cadastrar-produto' , component: CadastrarProdutoComponent},
  { path: 'finalizar-compra' , component: FinalizarCompraComponent},
  { path: 'conta' , component: ContaComponent},
  { path: 'carteira' , component: CarteiraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
