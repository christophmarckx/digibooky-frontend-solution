import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Story15Component } from './story15.component';

describe('Story15Component', () => {
  let component: Story15Component;
  let fixture: ComponentFixture<Story15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Story15Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Story15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
