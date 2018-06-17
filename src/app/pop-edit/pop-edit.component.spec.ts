import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopEditComponent } from './pop-edit.component';

describe('PopEditComponent', () => {
  let component: PopEditComponent;
  let fixture: ComponentFixture<PopEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
