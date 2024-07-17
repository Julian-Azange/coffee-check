import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FichasPage } from './fichas.page';

describe('FichasPage', () => {
  let component: FichasPage;
  let fixture: ComponentFixture<FichasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FichasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
