import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDeleteZonas } from './form-delete-zonas';

describe('FormDeleteZonas', () => {
  let component: FormDeleteZonas;
  let fixture: ComponentFixture<FormDeleteZonas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDeleteZonas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDeleteZonas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
