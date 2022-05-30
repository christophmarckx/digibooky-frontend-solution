import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Story20Component } from './story20.component';

describe('Story20Component', () => {
  let component: Story20Component;
  let fixture: ComponentFixture<Story20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Story20Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Story20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
