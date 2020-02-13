import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewHostComponent } from './add-new-host.component';

describe('AddNewHostComponent', () => {
  let component: AddNewHostComponent;
  let fixture: ComponentFixture<AddNewHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
