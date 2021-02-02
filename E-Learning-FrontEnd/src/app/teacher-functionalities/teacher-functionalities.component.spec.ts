import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherFunctionalitiesComponent } from './teacher-functionalities.component';

describe('TeacherFunctionalitiesComponent', () => {
  let component: TeacherFunctionalitiesComponent;
  let fixture: ComponentFixture<TeacherFunctionalitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherFunctionalitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherFunctionalitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
