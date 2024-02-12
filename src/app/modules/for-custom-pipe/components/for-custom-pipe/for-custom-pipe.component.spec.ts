import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForCustomPipeComponent } from './for-custom-pipe.component';

describe('ForCustomPipeComponent', () => {
  let component: ForCustomPipeComponent;
  let fixture: ComponentFixture<ForCustomPipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForCustomPipeComponent]
    });
    fixture = TestBed.createComponent(ForCustomPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
