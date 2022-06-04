import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifDemoComponent } from './ngif-demo.component';

describe('NgifDemoComponent', () => {
  let component: NgifDemoComponent;
  let fixture: ComponentFixture<NgifDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgifDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgifDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
