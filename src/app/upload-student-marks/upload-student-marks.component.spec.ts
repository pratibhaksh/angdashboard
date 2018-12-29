import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadStudentMarksComponent } from './upload-student-marks.component';

describe('UploadStudentMarksComponent', () => {
  let component: UploadStudentMarksComponent;
  let fixture: ComponentFixture<UploadStudentMarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadStudentMarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadStudentMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
