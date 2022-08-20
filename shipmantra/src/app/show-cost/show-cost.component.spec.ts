import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCostComponent } from './show-cost.component';

describe('ShowCostComponent', () => {
  let component: ShowCostComponent;
  let fixture: ComponentFixture<ShowCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
