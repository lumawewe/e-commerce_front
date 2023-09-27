import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHistoricoCompraComponent } from './modal-historico-compra.component';

describe('ModalHistoricoCompraComponent', () => {
  let component: ModalHistoricoCompraComponent;
  let fixture: ComponentFixture<ModalHistoricoCompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalHistoricoCompraComponent]
    });
    fixture = TestBed.createComponent(ModalHistoricoCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
