import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxUtilCoreComponent } from './ngx-util-core.component';

describe('NgxUtilCoreComponent', () => {
  let component: NgxUtilCoreComponent;
  let fixture: ComponentFixture<NgxUtilCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxUtilCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxUtilCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
