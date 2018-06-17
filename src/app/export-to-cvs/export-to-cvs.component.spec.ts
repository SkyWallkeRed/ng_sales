import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportToCvsComponent } from './export-to-cvs.component';

describe('ExportToCvsComponent', () => {
  let component: ExportToCvsComponent;
  let fixture: ComponentFixture<ExportToCvsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportToCvsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportToCvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
