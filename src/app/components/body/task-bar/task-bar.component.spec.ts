import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskBarComponent } from './task-bar.component';

describe('TaskBarComponent', () => {
  let component: TaskBarComponent;
  let fixture: ComponentFixture<TaskBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
