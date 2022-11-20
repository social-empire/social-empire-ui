import { TestBed } from '@angular/core/testing';
import { ForgotPasswordModalService } from './forgot-password-modal.service';

describe('ForgotPasswordModalService', () => {
  let service: ForgotPasswordModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForgotPasswordModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
