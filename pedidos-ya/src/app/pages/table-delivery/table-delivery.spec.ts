import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDelivery } from './table-delivery';

describe('TableDelivery', () => {
  let component: TableDelivery;
  let fixture: ComponentFixture<TableDelivery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableDelivery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableDelivery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
