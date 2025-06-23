import { ComponentFixture, TestBed } from '@angular/core/testing';

import { tabla-zonas } from './tabla-zonas';

describe('tabla-zonas', () => {
  let component: tabla-zonas;
  let fixture: ComponentFixture<tabla-zonas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [tabla-zonas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(tabla-zonas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
