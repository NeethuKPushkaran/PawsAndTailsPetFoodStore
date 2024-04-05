import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetFoodPageComponent } from './pet-food-page.component';

describe('PetFoodPageComponent', () => {
  let component: PetFoodPageComponent;
  let fixture: ComponentFixture<PetFoodPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetFoodPageComponent]
    });
    fixture = TestBed.createComponent(PetFoodPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
