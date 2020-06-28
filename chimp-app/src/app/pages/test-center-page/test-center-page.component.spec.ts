import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCenterPageComponent } from './test-center-page.component';

describe('TestCenterPageComponent', () => {
  let component: TestCenterPageComponent;
  let fixture: ComponentFixture<TestCenterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCenterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCenterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
