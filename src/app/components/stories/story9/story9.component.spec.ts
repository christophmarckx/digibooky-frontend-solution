import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Story9Component } from './story9.component';

describe('Story9Component', () => {
  let component: Story9Component;
  let fixture: ComponentFixture<Story9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Story9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Story9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
