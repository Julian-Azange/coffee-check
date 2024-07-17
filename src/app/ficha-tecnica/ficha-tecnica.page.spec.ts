import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FichaTecnicaPage } from './ficha-tecnica.page';

describe('FichaTecnicaPage', () => {
  let component: FichaTecnicaPage;
  let fixture: ComponentFixture<FichaTecnicaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaTecnicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
