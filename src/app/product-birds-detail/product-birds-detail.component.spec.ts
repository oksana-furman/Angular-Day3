import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBirdsDetailComponent } from './product-birds-detail.component';

describe('ProductBirdsDetailComponent', () => {
  let component: ProductBirdsDetailComponent;
  let fixture: ComponentFixture<ProductBirdsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductBirdsDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductBirdsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
