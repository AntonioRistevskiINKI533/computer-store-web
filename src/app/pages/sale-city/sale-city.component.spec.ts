import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleCityComponent } from './sale-product.component';

describe('SaleCityComponent', () => {
  let component: SaleCityComponent;
  let fixture: ComponentFixture<SaleCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
