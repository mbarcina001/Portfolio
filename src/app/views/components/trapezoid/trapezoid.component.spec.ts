import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TrapezoidComponent } from './trapezoid.component';

describe('TrapezoidComponent', () => {
  let component: TrapezoidComponent;
  let fixture: ComponentFixture<TrapezoidComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TrapezoidComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrapezoidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
