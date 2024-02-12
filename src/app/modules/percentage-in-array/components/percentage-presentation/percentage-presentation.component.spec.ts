import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PercentagePresentationComponent} from './percentage-presentation.component';

describe('PercentagePresentationComponent', () => {
  let component: PercentagePresentationComponent;
  let fixture: ComponentFixture<PercentagePresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PercentagePresentationComponent]
    });
    fixture = TestBed.createComponent(PercentagePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
