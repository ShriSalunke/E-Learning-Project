import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminShowScheduleComponent } from './admin-show-schedule.component';

describe('AdminShowScheduleComponent', () => {
  let component: AdminShowScheduleComponent;
  let fixture: ComponentFixture<AdminShowScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminShowScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminShowScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
