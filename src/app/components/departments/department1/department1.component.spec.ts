import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Department1Component } from './department1.component';

describe('Department1Component', () => {
  let component: Department1Component;
  let fixture: ComponentFixture<Department1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Department1Component]
    });
    fixture = TestBed.createComponent(Department1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
