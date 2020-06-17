import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindashboardComponent } from './findashboard.component';

describe('FindashboardComponent', () => {
  let component: FindashboardComponent;
  let fixture: ComponentFixture<FindashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
