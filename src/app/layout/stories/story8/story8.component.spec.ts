import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Story8Component } from './story8.component';

describe('Story8Component', () => {
  let component: Story8Component;
  let fixture: ComponentFixture<Story8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Story8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Story8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
