import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallLogGridComponent } from './call-log-grid.component';

describe('CallLogGridComponent', () => {
  let component: CallLogGridComponent;
  let fixture: ComponentFixture<CallLogGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CallLogGridComponent]
    });
    fixture = TestBed.createComponent(CallLogGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
