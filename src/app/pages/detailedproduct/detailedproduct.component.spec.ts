import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedproductComponent } from './detailedproduct.component';

describe('DetailedproductComponent', () => {
  let component: DetailedproductComponent;
  let fixture: ComponentFixture<DetailedproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
