import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDogsDetailComponent } from './product-dogs-detail.component';

describe('ProductDogsDetailComponent', () => {
  let component: ProductDogsDetailComponent;
  let fixture: ComponentFixture<ProductDogsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDogsDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDogsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
