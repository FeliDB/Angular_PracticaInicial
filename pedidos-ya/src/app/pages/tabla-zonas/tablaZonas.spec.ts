import { ComponentFixture, TestBed } from '@angular/core/testing';

import { tablaZonas } from './tablaZonas';

describe('tablaZonas', () => {
  let component: tablaZonas;
  let fixture: ComponentFixture<tablaZonas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [tablaZonas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(tablaZonas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
