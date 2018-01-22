import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalCurrentsComponent } from './national.component';

describe('NationalCurrentsComponent', () => {
  let component: NationalCurrentsComponent;
  let fixture: ComponentFixture<NationalCurrentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalCurrentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalCurrentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
