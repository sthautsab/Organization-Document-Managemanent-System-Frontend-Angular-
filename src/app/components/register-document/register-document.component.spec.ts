import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDocumentComponent } from './register-document.component';

describe('RegisterDocumentComponent', () => {
  let component: RegisterDocumentComponent;
  let fixture: ComponentFixture<RegisterDocumentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterDocumentComponent]
    });
    fixture = TestBed.createComponent(RegisterDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
