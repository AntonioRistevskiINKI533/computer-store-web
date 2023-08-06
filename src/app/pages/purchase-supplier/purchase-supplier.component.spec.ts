import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseSupplierComponent } from './sale-product.component';

describe('PurchaseSupplierComponent', () => {
  let component: PurchaseSupplierComponent;
  let fixture: ComponentFixture<PurchaseSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseSupplierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
