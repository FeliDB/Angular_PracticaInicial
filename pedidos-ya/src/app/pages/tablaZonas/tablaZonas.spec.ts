import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaZonas } from './tablaZonas';

describe('TablaZonas', () => {
  let component: TablaZonas;
  let fixture: ComponentFixture<TablaZonas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaZonas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaZonas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
