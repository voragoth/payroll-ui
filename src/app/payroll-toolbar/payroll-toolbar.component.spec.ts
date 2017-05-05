import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollToolbarComponent } from './payroll-toolbar.component';

describe('PayrollToolbarComponent', () => {
  let component: PayrollToolbarComponent;
  let fixture: ComponentFixture<PayrollToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
