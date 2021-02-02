import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherScheduleClassComponent } from './teacher-schedule-class.component';

describe('TeacherScheduleClassComponent', () => {
  let component: TeacherScheduleClassComponent;
  let fixture: ComponentFixture<TeacherScheduleClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherScheduleClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherScheduleClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
