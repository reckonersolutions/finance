import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerreportComponent } from './ledgerreport.component';

describe('LedgerreportComponent', () => {
  let component: LedgerreportComponent;
  let fixture: ComponentFixture<LedgerreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedgerreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgerreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
