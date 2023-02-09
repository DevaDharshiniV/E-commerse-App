import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SproductsComponent } from './sproducts.component';

describe('SproductsComponent', () => {
  let component: SproductsComponent;
  let fixture: ComponentFixture<SproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
