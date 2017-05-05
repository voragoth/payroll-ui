/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PayrollService } from './payroll.service';

describe('PayrollService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PayrollService]
    });
  });

  it('should ...', inject([PayrollService], (service: PayrollService) => {
    expect(service).toBeTruthy();
  }));
});
