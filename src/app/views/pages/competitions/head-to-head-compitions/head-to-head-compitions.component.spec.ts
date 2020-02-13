import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadToHeadCompitionsComponent } from './head-to-head-compitions.component';

describe('HeadToHeadCompitionsComponent', () => {
  let component: HeadToHeadCompitionsComponent;
  let fixture: ComponentFixture<HeadToHeadCompitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadToHeadCompitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadToHeadCompitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
