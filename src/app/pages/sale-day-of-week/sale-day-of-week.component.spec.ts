import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleDayOfWeekComponent } from './sale-product.component';

describe('SaleDayOfWeekComponent', () => {
  let component: SaleDayOfWeekComponent;
  let fixture: ComponentFixture<SaleDayOfWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleDayOfWeekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleDayOfWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
