import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KproductsComponent } from './kproducts.component';

describe('KproductsComponent', () => {
  let component: KproductsComponent;
  let fixture: ComponentFixture<KproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
