import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateScheduleClassComponent } from './update-schedule-class.component';

describe('UpdateScheduleClassComponent', () => {
  let component: UpdateScheduleClassComponent;
  let fixture: ComponentFixture<UpdateScheduleClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateScheduleClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateScheduleClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
