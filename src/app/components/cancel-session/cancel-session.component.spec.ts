import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelSessionComponent } from './cancel-session.component';

describe('CancelSessionComponent', () => {
  let component: CancelSessionComponent;
  let fixture: ComponentFixture<CancelSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
