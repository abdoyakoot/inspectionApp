import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditInspectionComponent } from './addEditInspection.component';

describe('AddEditInspectionComponent', () => {
  let component: AddEditInspectionComponent;
  let fixture: ComponentFixture<AddEditInspectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditInspectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
