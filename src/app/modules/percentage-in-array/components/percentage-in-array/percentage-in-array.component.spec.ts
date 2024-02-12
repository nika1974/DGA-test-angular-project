import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PercentageInArrayComponent} from './percentage-in-array.component';

describe('PercentageInArrayComponent', () => {
  let component: PercentageInArrayComponent;
  let fixture: ComponentFixture<PercentageInArrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PercentageInArrayComponent]
    });
    fixture = TestBed.createComponent(PercentageInArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
