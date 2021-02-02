import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherViewClassComponent } from './teacher-view-class.component';

describe('TeacherViewClassComponent', () => {
  let component: TeacherViewClassComponent;
  let fixture: ComponentFixture<TeacherViewClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherViewClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherViewClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
