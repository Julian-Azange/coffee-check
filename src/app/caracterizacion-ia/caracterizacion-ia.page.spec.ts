import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaracterizacionIaPage } from './caracterizacion-ia.page';

describe('CaracterizacionIaPage', () => {
  let component: CaracterizacionIaPage;
  let fixture: ComponentFixture<CaracterizacionIaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracterizacionIaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
