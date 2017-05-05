import { PayrollDatePipe } from './payroll-date.pipe';

describe('PayrollDatePipe', () => {
  it('create an instance', () => {
    const pipe = new PayrollDatePipe();
    expect(pipe).toBeTruthy();
  });
});
