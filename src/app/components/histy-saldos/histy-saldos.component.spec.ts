import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistySaldosComponent } from './histy-saldos.component';

describe('HistySaldosComponent', () => {
  let component: HistySaldosComponent;
  let fixture: ComponentFixture<HistySaldosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistySaldosComponent]
    });
    fixture = TestBed.createComponent(HistySaldosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
