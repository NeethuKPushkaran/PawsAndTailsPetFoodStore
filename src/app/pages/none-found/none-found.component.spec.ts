import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoneFoundComponent } from './none-found.component';

describe('NoneFoundComponent', () => {
  let component: NoneFoundComponent;
  let fixture: ComponentFixture<NoneFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoneFoundComponent]
    });
    fixture = TestBed.createComponent(NoneFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
