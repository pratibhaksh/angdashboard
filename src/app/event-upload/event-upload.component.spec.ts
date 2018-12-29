import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventUploadComponent } from './event-upload.component';

describe('EventUploadComponent', () => {
  let component: EventUploadComponent;
  let fixture: ComponentFixture<EventUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
