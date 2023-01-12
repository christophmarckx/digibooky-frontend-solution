import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Story12Component } from './story12.component';

describe('Story12Component', () => {
  let component: Story12Component;
  let fixture: ComponentFixture<Story12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Story12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Story12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
