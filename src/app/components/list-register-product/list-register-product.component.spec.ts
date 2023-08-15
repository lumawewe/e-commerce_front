import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRegisterProductComponent } from './list-register-product.component';

describe('ListRegisterProductComponent', () => {
  let component: ListRegisterProductComponent;
  let fixture: ComponentFixture<ListRegisterProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListRegisterProductComponent]
    });
    fixture = TestBed.createComponent(ListRegisterProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
