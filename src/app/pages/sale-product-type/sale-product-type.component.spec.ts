import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleProductTypeComponent } from './sale-product.component';

describe('SaleProductTypeComponent', () => {
  let component: SaleProductTypeComponent;
  let fixture: ComponentFixture<SaleProductTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleProductTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleProductTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
