import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormZonas } from './form-zonas';

describe('FormZonas', () => {
  let component: FormZonas;
  let fixture: ComponentFixture<FormZonas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormZonas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormZonas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
