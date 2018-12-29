import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoolGalleryComponent } from './shool-gallery.component';

describe('ShoolGalleryComponent', () => {
  let component: ShoolGalleryComponent;
  let fixture: ComponentFixture<ShoolGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoolGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoolGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
