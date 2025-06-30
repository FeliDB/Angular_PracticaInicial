import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditZonas } from './form-edit-zonas';

describe('FormZonas', () => {
  let component: FormEditZonas;
  let fixture: ComponentFixture<FormEditZonas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEditZonas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditZonas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
