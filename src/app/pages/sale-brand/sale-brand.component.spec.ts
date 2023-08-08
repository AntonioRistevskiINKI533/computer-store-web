import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleBrandComponent } from './sale-product.component';

describe('SaleBrandComponent', () => {
  let component: SaleBrandComponent;
  let fixture: ComponentFixture<SaleBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleBrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
