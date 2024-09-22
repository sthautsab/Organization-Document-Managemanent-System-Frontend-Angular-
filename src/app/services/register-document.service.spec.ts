import { TestBed } from '@angular/core/testing';

import { RegisterDocumentService } from './register-document.service';

describe('RegisterDocumentService', () => {
  let service: RegisterDocumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterDocumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
