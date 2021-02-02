import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFunctionalitiesComponent } from './student-functionalities.component';

describe('StudentFunctionalitiesComponent', () => {
  let component: StudentFunctionalitiesComponent;
  let fixture: ComponentFixture<StudentFunctionalitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentFunctionalitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFunctionalitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
