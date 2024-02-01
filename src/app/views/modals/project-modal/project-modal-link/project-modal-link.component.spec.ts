import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProjectModalLinkComponent } from './project-modal-link.component';

describe('ProjectModalLinkComponent', () => {
  let component: ProjectModalLinkComponent;
  let fixture: ComponentFixture<ProjectModalLinkComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectModalLinkComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectModalLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
