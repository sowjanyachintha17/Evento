import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvntregistrationComponent } from './evntregistration.component';

describe('EvntregistrationComponent', () => {
  let component: EvntregistrationComponent;
  let fixture: ComponentFixture<EvntregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvntregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvntregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
