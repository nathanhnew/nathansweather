import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalCurrentsComponent } from './local.component';

describe('LocalCurrentsComponent', () => {
  let component: LocalCurrentsComponent;
  let fixture: ComponentFixture<LocalCurrentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalCurrentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalCurrentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
