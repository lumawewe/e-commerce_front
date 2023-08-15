import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { SlideComponent } from './components/slide/slide.component';
import { MessagesComponent } from './components/messages/messages.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { SaldosComponent } from './components/saldos/saldos.component';
import { HistySaldosComponent } from './components/histy-saldos/histy-saldos.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RelatoriosComponent } from './components/relatorios/relatorios.component';
import { ProductsForSaleComponent } from './components/products-for-sale/products-for-sale.component';
import { TermosComponent } from './components/termos/termos.component';
import { CadastrarProdutoComponent } from './components/cadastrar-produto/cadastrar-produto.component';
import { ListRegisterProductComponent } from './components/list-register-product/list-register-product.component';
import { ModalEditarComponent } from './components/list-register-product/modal-editar/modal-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ProductListComponent,
    ProductDetailComponent,
    CartComponent,
    FooterComponent,
    MapaComponent,
    ToDoListComponent,
    SlideComponent,
    MessagesComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    SaldosComponent,
    HistySaldosComponent,
    NavBarComponent,
    RelatoriosComponent,
    ProductsForSaleComponent,
    TermosComponent,
    CadastrarProdutoComponent,
    ListRegisterProductComponent,
    ModalEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
