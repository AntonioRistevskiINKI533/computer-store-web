import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseDateComponent } from './sale-date.component';

describe('PurchaseDateComponent', () => {
  let component: PurchaseDateComponent;
  let fixture: ComponentFixture<PurchaseDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
